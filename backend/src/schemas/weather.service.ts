import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Weather } from './weather.schema';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {
    constructor(
        @InjectModel(Weather.name) private weatherModel: Model<Weather>,
        private httpService: HttpService
    ) {}

    async getWeatherData(city: string): Promise<Weather> {
        const geocodeResponse = await firstValueFrom(
            this.httpService.get(
                `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.VITE_WEATHER_API_TOKEN}`
            )
        );

        const matchingCity = geocodeResponse.data.find(
            (location) => location.name.toLowerCase() === city.toLowerCase()
        );

        if (!matchingCity) {
            throw new Error('City not found');
        }

        const { lat, lon } = matchingCity;

        const weatherResponse = await firstValueFrom(
            this.httpService.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.VITE_WEATHER_API_TOKEN}`
            )
        );

        const weatherData = {
            city: weatherResponse.data.name,
            country: weatherResponse.data.sys.country,
            temperature: Math.floor(weatherResponse.data.main.temp),
            weather: weatherResponse.data.weather[0].main,
            icon: weatherResponse.data.weather[0].icon,
        };

        const createdWeather = new this.weatherModel(weatherData);
        return createdWeather.save();
    }

    async getWeatherHistory(limit: number = 100): Promise<Weather[]> {
        try {
            const history = await this.weatherModel.find().limit(limit).exec();
            return history;
        } catch (error) {
            console.error('Error fetching weather history:', error);
        }
    }
}
