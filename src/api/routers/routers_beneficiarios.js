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
 *       - Listar Beneficiarios
 *     description: Devuelve una lista con todos los Beneficiarios
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Devuelve json con la busqueda
 *       400:
 *         description: Devuelve json avisando del error
 *
 */

app.get("/all", async function(req, res) {
    var beneficiarios = await beneficiario.listar();
    res.send(beneficiarios);
});
app.get("/obtenerBeneficiario", async function(req, res) {
    var beneficiarios = await beneficiario.listarById(req.query.idBeneficiario);
    res.send(beneficiarios);
});


app.get("/autorizadosByBeneficiario", async function(req, res) {
    var autorizados = await beneficiario.autorizadosByBeneficiario(req.query.idbeneficiario);
    res.send(autorizados);
});
/**
 * @swagger
 * /api/beneficiarios/beneficiario:
 *   post:
 *     tags:
 *       - Busca un beneficiario
 *     description: Busca un Beneficiario segun un dato
 *     produces:
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
 *             dato:
 *               type: string
 *     responses:
 *       200:
 *         description: Devuelve json con la busqueda
 *       400:
 *         description: Devuelve json avisando del error
 *
 */

app.post("/beneficiario", function(req, res) {
    
    
});


/**
 * @swagger
 * /api/beneficiarios/alta:
 *   post:
 *     tags:
 *       - Crear Beneficiario
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
 *               type: string 
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

app.post("/alta", verificaToken.verificaTokenMiddleware, 
    function (req, res) {
        let result = beneficiario.insertarbeneficiario(req.body)
        result.then(users => {
            console.log(users);
            res.send(users)
             
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({'error':'Error en el insert de beneficiario' + err.message}).send();
    })
});

/**
 * @swagger
 * /api/beneficiarios/actualizar:
 *   post:
 *     tags:
 *       - Actualiza los datos de un Beneficiario
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
 *         description: Beneficiarios actualizado en tabla Mysql con exito
 *       401:
 *         description: Token invalido, no tiene permisos para ejecutar esta api
 *       400:
 *         description: Ocurrio un error al guardar el beneficiarios en Mysql
 */

app.post("/actualizar", function(req, res) {
    let result = beneficiario.actualizarbeneficiario(req.body)
    result.then(users => {
        console.log(users);
        res.send(users)
         
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({'error':'Error en el insert de beneficiario' + err.message}).send();

    
    })
    
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
 *       - in: query
 *         name: token
 *         schema:
 *           type: string
 *       - name: body
 *         in: body
 *         schema:
 *           properties:
 *             idBeneficiario:
 *              type: integer
 *             idAutorizado:
 *               type: integer
*         required:
 *           - idBeneficiario
 *           - idAutorizado
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
 *       - Retiro producto
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           properties:
 *             idBeneficiario:
 *               type: integer
 *             idAutorizado:
 *               type: integer
  *         required:
 *           - idBeneficiario
 *           - idAutorizado
 *     responses:
 *       200:
 *         description: Se asigno autorizado correctamente
 *       401:
 *         description: Token invalido, no tiene permisos para ejecutar esta api
 *       400:
 *         description: Ocurrio un error al guardar el beneficiarios en Mysql
 */

app.post("/retirarProducto", function(req, res) {

    
});


module.exports = app;

