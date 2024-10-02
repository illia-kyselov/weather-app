import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { Weather } from './weather.schema';

@Controller('weather')
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) {}

    @Get(':city')
    async getWeather(@Param('city') city: string): Promise<Weather> {
        return this.weatherService.getWeatherData(city);
    }

    @Get()
    async getWeatherHistory(): Promise<Weather[]> {
        return this.weatherService.getWeatherHistory(100);
    }
}
