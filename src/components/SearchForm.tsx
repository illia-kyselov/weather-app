import { useState } from 'react';

interface SearchFormProps {
    onCitySelect: (city: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onCitySelect }) => {
    const [cityInput, setCityInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (cityInput.trim()) {
            onCitySelect(cityInput);
        }
    };

    return (
        <div className="px-4 py-0 sm:p-10 flex flex-col justify-center box-border">
            <label className="font-inter mb-3 text-sm font-normal leading-4 text-left text-label-text">
                Enter the city
            </label>
            <input
                placeholder="Start entering the name of the city"
                type="text"
                className="w-full h-[44px] p-4 gap-2 mb-5 border rounded-lg border-[#CED6DD] sm:w-[492px] text-[14px] font-normal leading-[14px] text-[#1C242B]"
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
            />
            <button
                onClick={handleSubmit}
                className="text-white bg-custom-btn-gradient w-full h-[44px] p-4 px-8 mb-[52px] rounded-lg flex items-center justify-center font-bold uppercase transition duration-200 ease-linear hover:animate-scale-up"
            >
                Submit
            </button>
            <a
                href="/list"
                className="font-inter text-sm font-normal leading-5 text-center underline text-link-text transition duration-200 ease-in-out hover:text-link-text-dark"
            >
                Show history
            </a>
        </div>
    );
};

export default SearchForm;
