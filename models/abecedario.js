const { Model, DataTypes } = require("sequelize");
const sequelize = require('../database/database');
const Palabra = require("./palabra");


class Abecedario extends Model{}

Abecedario.init({
    abecedario:{
        type:DataTypes.CHAR
    },
    abecedario_shipibo:{
        type:DataTypes.STRING
    },
    titulo:{
        type:DataTypes.STRING
    },
    titulo_shipibo:{
        type:DataTypes.STRING
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


Abecedario.hasMany(Palabra,{
    as:'FK_PalabraAbecedario',
    foreignKey:'id_abecedario'
});

Palabra.belongsTo(Abecedario,{
    sourcekey:'id',
    foreignKey:'id_abecedario'
})


module.exports = Abecedario