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
 *       - Obtener todos los Autorizados *
 *     description: Develve una lista  con todos los datos de los autorizados hasta el momento
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
 * /api/autorizados/buscar:
 *   get:
 *     tags:
 *       - Busca un Autorizado *
 *     description: Busca un autorizado segun un dato
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: token 
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: devuelve json con la busqueda
 *       400:
 *         description: devuelve el error
 *
 */

app.get("/buscar", function(req, res) {
    
    
});


/**
 * @swagger
 * /api/autorizados/alta:
 *   post:
 *     tags:
 *       - Crear Autorizado 
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: token
 *         schema:
 *           type: string
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
 *             telefono:
 *               type: string
 *             fechaAlta:
 *               type: string
 *             fechaBaja:
 *               type: string 
 *         required:
 *           - nombre
 *           - apellido
 *           - dni
 *           - fechaAlta
 *           - telefono
 *     responses:
 *       200:
 *         description: autorizado icreado correctamente
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
 * /api/autorizados/actualizar:
 *   post:
 *     tags:
 *       - Actualiza los datos de un Autorizado
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: token
 *         schema:
 *           type: string
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
 *         description: Autorizados generado correctamente
 *       401:
 *         description: Token invalido, no tiene permisos para ejecutar esta api
 *       400:
 *         description: Ocurrio un error al guardar el autorizados en Mysql
 */

app.post("/actualizar", function(req, res) {

    
});

/**
 * @swagger
 * /api/autorizados/baja:
 *   post:
 *     tags:
 *       - Baja de Autorizado
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: token
 *         schema:
 *           type: string
 *       - name: body
 *         in: body
 *         schema:
 *           properties:
 *             id:
 *               type: integer

 *         required:
 *           - id
 *     responses:
 *       200:
 *         description: Autorizado creado correctamente
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
 *       - Eliminar Autorizado para un Beneficiario
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           properties:
 *             id:
 *               type: integer
  *             idbeneficiario:
 *               type: integer
 *         required:
 *           - id
 *           - idbeneficiario

 *     responses:
 *       200:
 *         description: autorizados insertado en tabla Mysql con exito
 *       401:
 *         description: Token invalido, no tiene permisos para ejecutar esta api
 *       400:
 *         description: Ocurrio un error al guardar el autorizados en Mysql
 */

app.post("/quitarAutorizado", function(req, res) {

    

});

module.exports = app;