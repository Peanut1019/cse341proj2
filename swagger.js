const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Birds API',
        description: 'Birds API'
    },
    host: 'localhost:3030',
    schemes: ['http', 'https']
}

const outputFile = './swagger.json';
const endpiontsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpiontsFiles, doc);