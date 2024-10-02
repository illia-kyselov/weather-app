import { WeatherData } from '../types/types';

interface UserLocationProps {
    weatherData: WeatherData;
}

const UserLocation: React.FC<UserLocationProps> = ({ weatherData }) => {
    return (
        <div className="flex flex-col items-center px-4 sm:px-36 sm:py-[119px] mb-[91px] sm:mb-0">
            <img
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt="weather icon"
                className="mb-4 sm:mb-20 w-[150px] h-[150px] sm:w-[278px] sm:h-[278px]"
            />
            <div className="font-bold text-center">
                <h2 className="text-2xl font-bold leading-7 mb-4 text-main-text">
                    {weatherData.city}, {weatherData.country}
                </h2>
                <div className="text-5xl font-bold leading-[64.8px] mb-1 text-main-text">
                    {weatherData.temperature}°
                </div>
                <div className="text-sm font-normal leading-5 text-secondary-text">
                    {weatherData.weather}
                </div>
            </div>
        </div>
    );
};

export default UserLocation;
