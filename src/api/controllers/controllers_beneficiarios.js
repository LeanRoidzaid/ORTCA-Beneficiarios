const BENEFICIARIO = require('../models/models_beneficiarios')
const BENEFAUTORIZADO = require('../models/models_beneficiario_autorizado')


exports.insertarbeneficiario = function(beneficiario){
    return BENEFICIARIO.create({
        nombre: beneficiario.nombre,
        apellido: beneficiario.apellido,
        dni: beneficiario.dni,
        fechaNac: beneficiario.fechaNac,
        telefono: beneficiario.telefono,
        data_created: beneficiario.data_created,
        fh_baja: beneficiario.fh_baja, 
       })
}

exports.asignarAutorizado = function(benefAutoriado){
    return BENEFAUTORIZADO.create({
        id_beneficiario: benefAutoriado.idBeneficiario,  
        id_autorizado: benefAutoriado.idAutorizado,
       })
}
exports.listar = async function(){
    return await BENEFICIARIO.findAll();
}