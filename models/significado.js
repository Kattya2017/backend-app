const { Model, DataTypes } = require("sequelize");
const sequelize = require('../database/database');


class Significado extends Model{}

Significado.init({
    shipibo:{
        type:DataTypes.STRING
    },
    descripcion_espanol:{
        type:DataTypes.STRING
    },
    descripcion_shipibo:{
        type:DataTypes.STRING
    },
    audio:{
        type:DataTypes.STRING
    },
    id_palabra:{
        type:DataTypes.INTEGER
    }
},{
    sequelize,
    tableName:'significado',
    timestamps:false
})

module.exports = Significado;