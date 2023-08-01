const { Model, DataTypes } = require("sequelize");
const sequelize = require('../database/database');
const Significado = require("./significado");

class Palabra extends Model{};

Palabra.init({
    shipibo:{
        type:DataTypes.CHAR
    },
    nombre:{
        type:DataTypes.STRING
    },
    estado:{
        type:DataTypes.TINYINT,
        defaultValue:1
    }
},{
    sequelize,
    tableName:'palabra',
    timestamps:false
});

Palabra.hasMany(Significado,{
    as:'FK_SignificadoPalbra',
    foreignKey:'id_palabra'
});

Significado.belongsTo(Palabra,{
    sourcekey:'id',
    foreignKey:'id_palabra'
})

module.exports = Palabra;