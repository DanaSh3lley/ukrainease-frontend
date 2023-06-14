const config = {
    development: {
        apiEndpoint: 'http://localhost:3000/api/v1',
        images: 'http://localhost:3000/img'
    },
    production: {
        apiEndpoint: 'https://your-api-domain.com/api',
        images: 'http://localhost:3000/img'
    },
};

export default config;
