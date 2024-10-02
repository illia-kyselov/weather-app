import { Link } from '@tanstack/react-router';
import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[100vh] grow text-center bg-custom-gradient">
            <div className="flex flex-col items-center mb-16">
                <div className="text-[20px] sm:text-[24px] lg:text-[32px] max-w-[244px] sm:max-w-[398px] lg:max-w-[542px] font-inter text-lg font-semibold leading-10 mb-6 sm:mb-8">
                    Sorry, the page you are looking for doesn't exist
                </div>
                <Link
                    to="/"
                    className="text-white bg-custom-btn-gradient font-semibold py-3 px-3 rounded-lg transition duration-200 ease-linear hover:animate-scale-up"
                >
                    Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
