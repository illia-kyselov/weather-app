import axios from 'axios';
import { WeatherData } from '../types/types';

export const fetchWeatherData = async (
    city: string
): Promise<WeatherData | null> => {
    try {
        const response = await axios.get(
            `http://localhost:3000/weather/${city}`
        );

        if (response.data) {
            const weatherData: WeatherData = {
                city: response.data.city,
                country: response.data.country,
                temperature: Math.floor(response.data.temperature),
                weather: response.data.weather,
                icon: response.data.icon,
            };

            localStorage.setItem(city, JSON.stringify(weatherData));
            return weatherData;
        } else {
            throw new Error('Неправильні дані від сервера');
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw new Error('Failed to retrieve data. Please try again.');
    }
};
