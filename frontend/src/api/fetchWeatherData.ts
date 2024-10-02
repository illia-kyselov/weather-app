import axios from 'axios';
import { WeatherData } from '../types/types';

export const fetchWeatherData = async (
    city: string
): Promise<WeatherData | null> => {
    const cachedData = localStorage.getItem(city);
    if (cachedData) {
        return JSON.parse(cachedData);
    }

    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/weather/${city}`
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
        console.error('Помилка при отриманні даних: ', error);
        throw new Error('Не вдалося отримати дані. Спробуйте ще раз.');
    }
};
