module.exports = {
    mode: process.env.NODE_ENV ? 'jit' : undefined,
    content: [
        './src/main/resources/*.html',
        './src/main/resources/templates/**/*.html'
        ],
    darkMode: 'media',
    daisyui:{
        themes: [
                {
                    'luckychessDark':{
                        ...require('daisyui/src/theming/themes')['dark'],
                        'primary': '#ceaf8a',
                        'secondary': '#3d4451',
                        'accent': '#37cdbe',
                        'neutral': '#d9d9d9',
                        'base-100': '#fDfDfD',
                    }
                }
            ],
    },
    variants: {
        extend: {},
    },
    plugins: [require('daisyui')]
}