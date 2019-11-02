const express = require("express");
const app = express();
const beneficiario = require('../controllers/controllers_beneficiarios');
const  verificaRol  = require("../middleware/verificaRolMiddleware");
const  verificaToken  = require("../middleware/verificaTokenMiddleware");

/**
 * @swagger
 * /api/beneficiarios/all:
 *   get:
 *     tags:
 *       - listar beneficiarios
 *     description: Busca en Mysql a todos los beneficiarios
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
 * /api/beneficiarios/beneficiario:
 *   get:
 *     tags:
 *       - Busca un beneficiario
 *     description: Busca en Mysql a todos al beneficiario deseado
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
 * /api/beneficiarios/alta:
 *   post:
 *     tags:
 *       - Crear beneficiario
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
 *         description: Beneficiarios insertado en tabla Mysql con exito
 *       401:
 *         description: Token invalido, no tiene permisos para ejecutar esta api
 *       400:
 *         description: Ocurrio un error al guardar el beneficiarios en Mysql
 */

app.post("/alta", verificaToken.verificaTokenMiddleware, verificaRol.esAdministradorMiddleware,
    function (req, res) {
        let result = beneficiario.insertarbeneficiario(req.body)
        result.then(users => {
            console.log(users);
            res.send(users)
             
        })
        .catch(err => {
            console.log(err);
            res.status(400).send('Error en el insert de beneficiario' + err.message);
    })
});

/**
 * @swagger
 * /api/beneficiarios/modificacion:
 *   post:
 *     tags:
 *       - Modificacion de beneficiario
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
 *         description: Beneficiarios insertado en tabla Mysql con exito
 *       401:
 *         description: Token invalido, no tiene permisos para ejecutar esta api
 *       400:
 *         description: Ocurrio un error al guardar el beneficiarios en Mysql
 */

app.post("/modificacion", function(req, res) {

    
});

/**
 * @swagger
 * /api/beneficiarios/baja:
 *   post:
 *     tags:
 *       - Baja logica de beneficiario
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
 *         description: Beneficiarios insertado en tabla Mysql con exito
 *       401:
 *         description: Token invalido, no tiene permisos para ejecutar esta api
 *       400:
 *         description: Ocurrio un error al guardar el beneficiarios en Mysql
 */

app.post("/baja", function(req, res) {

});
/**
 * @swagger
 * /api/beneficiarios/agregarAutorizado:
 *   post:
 *     tags:
 *       - Agregar autorizado al benficiario
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

app.post("/agregarAutorizado", verificaToken.verificaTokenMiddleware, verificaRol.esAdministradorMiddleware, 
    function(req, res) {
    let result = beneficiario.asignarAutorizado(req.body)
    result.then(roles => {
       console.log(roles);
        res.send("Se agrego al autorizado " + req.body.idAutorizado + " al beneficiario " + req.body.idBenefiiario)
         
    })
    .catch(err => {
        console.log(err);
        res.status(400).send('Error al asignar Autorizado');
        throw err;
    })

});

/**
 * @swagger
 * /api/beneficiarios/retirarProducto:
 *   post:
 *     tags:
 *       - Beneficiario retirar producto
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
 *         description: Beneficiarios insertado en tabla Mysql con exito
 *       401:
 *         description: Token invalido, no tiene permisos para ejecutar esta api
 *       400:
 *         description: Ocurrio un error al guardar el beneficiarios en Mysql
 */

app.post("/retirarProducto", function(req, res) {

    
});


module.exports = app;

