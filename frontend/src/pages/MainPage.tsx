import { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import UserLocation from '../components/UserLocation';
import { WeatherData } from '../types/types';
import { fetchWeatherData } from '../api/fetchWeatherData';

const MainPage = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const loadWeatherData = async (city: string) => {
        setIsLoading(true);

        try {
            const data = await fetchWeatherData(city);
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching data: ', error);
            alert('Failed to retrieve data. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadWeatherData('Kyiv');
    }, []);

    const handleCitySelect = async (city: string) => {
        loadWeatherData(city);
    };

    return (
        <div className="flex flex-col sm:flex-row gap-0 sm:gap-4 md:items-center justify-center min-h-[calc(100vh-4rem)] grow text-center bg-custom-gradient">
            {isLoading ? (
                <div className="px-4 sm:px-36 sm:py-[119px] mb-[91px] sm:mb-0">
                    <h2 className="text-2xl font-bold">Завантаження...</h2>
                </div>
            ) : (
                weatherData && <UserLocation weatherData={weatherData} />
            )}
            <SearchForm onCitySelect={handleCitySelect} />
        </div>
    );
};

export default MainPage;
