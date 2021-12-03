const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

// Loading via yml.safeLoad to avoid errors with special characters during processing
const swaggerDocument = yaml.load(fs.readFileSync(path.resolve(__dirname, '../holtenterprises-e-commerce-REST-API-1.0.0-resolved.yml'), 'utf8'));

module.exports = (app) => {
  // Serves Swagger API documentation to /docs url
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}