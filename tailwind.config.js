module.exports ={
    mode: process.env.NODE_ENV ? 'jit' : undefined,
    content: [
        './src/main/resources/*.html',
        './src/main/resources/templates/**/*.html'
        ],
    darkMode: 'media',
    theme: {
        extend: {
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("daisyui")]
}