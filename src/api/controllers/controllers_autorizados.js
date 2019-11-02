const AUTORIZADOS = require('../models/models_autorizados')

exports.insertarAutorizado = function(autorizados){
    return AUTORIZADOS.create({
        nombre: autorizados.nombre,
        apellido: autorizados.apellido,
        dni: autorizados.dni,
        telefono: autorizados.telefono,
        fh_alta: autorizados.fh_alta,
        fh_baja: autorizados.fh_baja,
        })
}