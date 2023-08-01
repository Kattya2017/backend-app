
const Usuario = require('../models/usuario');
const Role = require('../models/role');
const Abecedario = require('../models/abecedario');
const Palabra = require('../models/palabra');

const esRoleValido = async (rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
}
const esUsuarioValido = async(id) => {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
       throw new Error(`El id ${id} no existe en la base de datos`);
    }
}
const esNombreUsuarioValido = async(nombre='')=>{
        const name = nombre.toUpperCase();
        const existeUsuario = await Usuario.findOne({nombre:name});
        if (existeUsuario) {
            throw new Error(`El nombre:${name} ya existe en la base de datos`);
        } 
}
const esUsuarioValidoUser = async(usuario='')=>{
    const existeUsuario = await Usuario.findOne({usuario});
    if (existeUsuario) {
        throw new Error(`El usuario:${usuario} ya existe en la base de datos`);
    } 
}
const coleccionesPermitidas = (coleccion='', colecciones=[]) => {
    const incluida = colecciones.includes(coleccion);
    if (!incluida) {
        throw new Error(`La coleccion ${coleccion} no es permitida`);
    }
    return true;
}

const validarAbecedario = async (abecedario = '') =>{
const existeAbecedario = await Abecedario.findOne({
    where:{
        abecedario : `${abecedario.toUpperCase()}`,
    },
});
if (existeAbecedario) {
    throw new Error(`El abecedario ${abecedario} ya esta registrado en la BD`)
}
};


const validarTitulo = async (titulo = '') =>{
    const existeTitulo = await Palabra.findOne({
        where:{
            titulo : `${titulo.toUpperCase()}`,
        },
    });
    if (existeTitulo) {
        throw new Error(`El titulo ${titulo} ya esta registrado en la bd`)
    }
};


module.exports = {
    esRoleValido,
    esUsuarioValido,
    esNombreUsuarioValido,
    esUsuarioValidoUser,
    coleccionesPermitidas,
    validarAbecedario,
    validarTitulo
}