/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'custom-gradient':
                    'linear-gradient(180deg, #BCE8FF 0%, #FFFFFF 41.26%)',
                'custom-btn-gradient':
                    'linear-gradient(180deg, #2F5AF4 0%, #0FA2AB 100%)',
            },
            colors: {
                'custom-blue': '#F2F6FF',
                'main-text': '#1C242B',
                'secondary-text': '#35424F',
                'label-text': '#56626F',
                'link-text': '#8E9AA7',
                'link-text-dark': '#6B7C8B',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            animation: {
                'scale-up': 'scaleUp 0.3s linear forwards',
                'scale-up-img': 'scaleUpImg 0.3s linear forwards',
            },
            keyframes: {
                scaleUp: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.01)' },
                },
                scaleUpImg: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.1)' },
                },
            },
        },
    },
    plugins: [],
};
