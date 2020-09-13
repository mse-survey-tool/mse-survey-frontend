
module.exports = {
    purge: {
        enabled: false,
        content: [
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.ts',
            './src/**/*.tsx',
            './public/**/*.html',
        ],
    },
    theme: {
        extend: {
            boxShadow: {
                outline: '0 0 0 3px #BEE3F8',
            },
            spacing: {
                '50vh': '50vh',
                '100vh': '100vh',
                '50vw': '50vw',
                '100vw': '100vw',
            }

        }
    }
};
