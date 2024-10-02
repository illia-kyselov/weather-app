import React, { useEffect, useState } from 'react';
import arrow from '../assets/icons/arrow.svg';
import ListCard from '../components/ListCard';
import axios from 'axios';

interface WeatherData {
    city: string;
    country: string;
    temperature: number;
    weather: string;
    icon: string;
}

const ListPage: React.FC = () => {
    const [weatherHistory, setWeatherHistory] = useState<WeatherData[]>([]);

    useEffect(() => {
        const fetchWeatherHistory = async () => {
            try {
                const response = await axios.get<WeatherData[]>(
                    'http://localhost:3000/weather'
                );
                setWeatherHistory(response.data);
            } catch (error) {
                console.error('Error fetching weather history:', error);
            }
        };

        fetchWeatherHistory();
    }, []);

    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)] px-4 sm:px-36 py-10 bg-custom-gradient">
            <div className="flex flex-row items-baseline mb-4 sm:mb-9">
                <a href="/" className="mr-6 ">
                    <img
                        src={arrow}
                        alt="arrow"
                        className="transition duration-200 ease-linear hover:animate-scale-up-img"
                    />
                </a>
                <h3 className="font-inter text-lg font-semibold leading-6">
                    Weather History
                </h3>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
                {weatherHistory.slice(0, 100).map((weather, index) => (
                    <ListCard
                        key={index}
                        city={weather.city}
                        country={weather.country}
                        temperature={weather.temperature}
                        weatherType={weather.weather}
                        icon={weather.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListPage;
