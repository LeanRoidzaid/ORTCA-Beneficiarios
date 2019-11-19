require("./config/config");

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Env Config
const config = require('./config/config');
process.env.CLAVEJWT = "123456";

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
**********  CONFIGURACION DE SWAGGER  **************
*/  

//paquetes npm para que swagger funcione
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

//la especificacion que figurara en la doc automatica
const swaggerDefinition = {
  info: {
    title: "REST API BENAFICIARIOS ELAISS",
    version: "1.0.0",
    description: "API Beneficiarios - ELAISS"
  },
  host: config.URLUsuarios ,
  basePath: "/"
};

//donde va a "mirar" swagger para exponer la doc
const options = {
  swaggerDefinition,
  apis: ['./src/api/routers/*.js'],
  customCss: '.swagger-ui .topbar { display: none }'
};

//finalizacion de las configuraciones
const swaggerSpec = swaggerJsdoc(options);
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api-docs-beneficiarios', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
/*
**********  FIN CONFIGURACION DE SWAGGER  **************
*/
app.use("/api/beneficiarios/", require('./api/routers/routers_beneficiarios'));
app.use("/api/autorizados/", require('./api/routers/routers_autorizados'));


//ahora toma el puerto del archivo config/config.js
app.listen(config.PORT, function() {
  console.log(
    "Servidor express iniciado en el puerto " + config.PORT + "!"
    );
  });
  
//DEBO EXPORTAR app PARA LOS TEST EN MOCHA, solo para eso, por ahora queda comentado
module.exports = app;
