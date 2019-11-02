const express = require("express");
const app = express();
const  autorizados = require('../controllers/controllers_autorizados');
const  verificaRol  = require("../middleware/verificaRolMiddleware");
const  verificaToken  = require("../middleware/verificaTokenMiddleware");
/**
 * @swagger
 * /api/autorizados/all:
 *   get:
 *     tags:
 *       - listar autorizados
 *     description: Busca en Mysql a todos los autorizados
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: devuelve json con la busqueda
 *       400:
 *         description: devuelve json avisando del error
 *
 */

app.get("/all", function(req, res) {
    
    
});

/**
 * @swagger
 * /api/autorizados/autorizado:
 *   get:
 *     tags:
 *       - Busca un autorizados
 *     description: Busca en Mysql a todos al autorizado deseado
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: devuelve json con la busqueda
 *       400:
 *         description: devuelve json avisando del error
 *
 */

app.get("/all", function(req, res) {
    
    
});


/**
 * @swagger
 * /api/autorizados/alta:
 *   post:
 *     tags:
 *       - Crear autorizado
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           properties:
 *             nombre:
 *               type: string
 *             apellido:
 *               type: string
 *             dni:
 *               type: integer
 *             fechaNac:
 *               type: string
 *             telefono:
 *               type: integer 
 *         required:
 *           - nombre
 *           - apellido
 *           - dni
 *           - fechaNac
 *     responses:
 *       200:
 *         description: autorizados insertado en tabla Mysql con exito
 *       401:
 *         description: Token invalido, no tiene permisos para ejecutar esta api
 *       400:
 *         description: Ocurrio un error al guardar el autorizados en Mysql
 */

app.post("/alta", verificaToken.verificaTokenMiddleware, verificaRol.esAdministradorMiddleware,
function (req, res) {
    let result = autorizados.insertarAutorizado(req.body)
    result.then(users => {
        console.log(users);
        res.send(users)
         
    })
    .catch(err => {
        console.log(err);
        res.status(400).send('Error en el insert de autorizado' + err.message);
    })    
});

/**
 * @swagger
 * /api/autorizados/modificacion:
 *   post:
 *     tags:
 *       - Modificacion de autorizado
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           properties:
 *             nombre:
 *               type: string
 *             apellido:
 *               type: string
 *             dni:
 *               type: integer
 *             fechaNac:
 *               type: string
 *             telefono:
 *               type: integer 
 *         required:
 *           - nombre
 *           - apellido
 *           - dni
 *           - fechaNac
 *     responses:
 *       200:
 *         description: autorizados insertado en tabla Mysql con exito
 *       401:
 *         description: Token invalido, no tiene permisos para ejecutar esta api
 *       400:
 *         description: Ocurrio un error al guardar el autorizados en Mysql
 */

app.post("/modificacion", function(req, res) {

    
});

/**
 * @swagger
 * /api/autorizados/baja:
 *   post:
 *     tags:
 *       - Baja logica de autorizados
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           properties:
 *             nombre:
 *               type: string
 *             apellido:
 *               type: string
 *             dni:
 *               type: integer
 *             fechaNac:
 *               type: string
 *             telefono:
 *               type: integer 
 *         required:
 *           - nombre
 *           - apellido
 *           - dni
 *           - fechaNac
 *     responses:
 *       200:
 *         description: autorizados insertado en tabla Mysql con exito
 *       401:
 *         description: Token invalido, no tiene permisos para ejecutar esta api
 *       400:
 *         description: Ocurrio un error al guardar el autorizados en Mysql
 */

app.post("/baja", function(req, res) {

    
});


/**
 * @swagger
 * /api/autorizados/quitarAutorizado:
 *   post:
 *     tags:
 *       - Eliminar autorizado para el beneficiario
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           properties:
 *             nombre:
 *               type: string
 *             apellido:
 *               type: string
 *             dni:
 *               type: integer
 *             fechaNac:
 *               type: string
 *             telefono:
 *               type: integer 
 *         required:
 *           - nombre
 *           - apellido
 *           - dni
 *           - fechaNac
 *     responses:
 *       200:
 *         description: autorizados insertado en tabla Mysql con exito
 *       401:
 *         description: Token invalido, no tiene permisos para ejecutar esta api
 *       400:
 *         description: Ocurrio un error al guardar el autorizados en Mysql
 */

app.post("/eliminarAutorizado", function(req, res) {

    

});

module.exports = app;