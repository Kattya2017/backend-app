const { Model, DataTypes } = require("sequelize");
const sequelize = require('../database/database');


class Abecedario extends Model{}

Abecedario.init({
    nombre:{
        type:DataTypes.CHAR
    },
    descripcion:{
        type:DataTypes.CHAR
    },
    estado:{
        type:DataTypes.TINYINT,
        defaultValue:1
    }
},{
    sequelize,
    timestamps:false,
    tableName:'abecedario'
})

module.exports = Abecedario