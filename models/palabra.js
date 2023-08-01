const { Model, DataTypes } = require("sequelize");
const sequelize = require('../database/database');

class Palabra extends Model{};

Palabra.init({
    titulo:{
        type:DataTypes.STRING
    },
    titulo_shipibo:{
        type:DataTypes.STRING
    },
    descripcion:{
        type:DataTypes.TEXT
    },
    descripcion_shipibo:{
        type:DataTypes.TEXT
    },
    audio:{
        type:DataTypes.STRING
    },
    id_abecedario:{
        type:DataTypes.INTEGER
    }
},{
    sequelize,
    tableName:'palabra',
    timestamps:false
});


module.exports = Palabra;