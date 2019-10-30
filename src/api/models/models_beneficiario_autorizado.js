const Sequelize = require('sequelize')
const sequelize = require('../../config/dbConnection');

const BenefAutorizado = sequelize.define('beneficiario_autorizado', {
     id: {type: Sequelize.INTEGER, primaryKey: true},
     id_beneficiario: Sequelize.INTEGER,  
     id_autorizado: Sequelize.INTEGER,
     },{timestamps: false
  });
module.exports = BenefAutorizado; 