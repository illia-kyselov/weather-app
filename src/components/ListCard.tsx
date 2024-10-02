import React from 'react';

interface ListCardProps {
    city: string;
    country: string;
    temperature: number;
    weatherType: string;
    icon: string;
}

const ListCard: React.FC<ListCardProps> = ({
    city,
    country,
    temperature,
    weatherType,
    icon,
}) => {
    return (
        <div className="flex flex-row w-full md:w-[calc(50%-1rem)] bg-custom-blue rounded-lg p-3">
            <div className="">
                <div className="font-inter text-base font-bold leading-6 mb-1 text-black">
                    {city}, {country}
                </div>
                <div className="font-inter text-base font-normal leading-6 text-black">
                    {weatherType}
                </div>
            </div>

            <div className="flex flex-row items-center ml-auto">
                <div className="font-inter text-base font-bold leading-6 mr-1 text-main-text">
                    {temperature}°
                </div>
                <img
                    src={`http://openweathermap.org/img/wn/${icon}.png`}
                    alt="weather icon"
                    className="w-[51px] h-[51px]"
                />
            </div>
        </div>
    );
};

export default ListCard;
