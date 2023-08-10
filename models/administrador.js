const { Model, DataTypes } = require("sequelize");
const sequelize = require('../database/database');


class Administrador extends Model{}

Administrador.init({
    nombre:{
        type:DataTypes.STRING
    },
    apellido:{
        type:DataTypes.STRING
    },
    usuario:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    estado:{
        type:DataTypes.TINYINT,
        defaultValue:1
    }
},{
    sequelize,
    tableName:'administrador',
    timestamps:false
});


module.exports = Administrador;