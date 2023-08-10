const { request, response } = require("express");
const Administrador = require("../models/administrador");


const mostrarAdministrador = async (req = request, res = response) =>{
try {
    const {estado} = req.query;
    const resp = await Administrador.findAll({
        where:{
            estado
        }
    });
    let array = [];
    if (resp) {
        for (let i = 0; i < resp.length; i++) {
            const obj = {
                ids:i+1,
                id:resp[i].id,
                nombre:resp[i].nombre,
                apellido:resp[i].apellido,
                usuario:resp[i].usuario,
                password:resp[i].password,
                estado:resp[i].estado
            }
            array.push(obj)
        }
    }
    res.json({
        ok: true,
        msg: "Se muestran los datos con exito",
        resp,
    });
} catch (error) {
    res.status(400).json({
        ok: false,
        msg:`Error: ${error}`,
    });
}
};


const mostrarIdAdministrador = async (req = request, res = response) =>{
    try {
        const {id} = req.params;
        const resp = await Administrador.findOne({
            where:{
                id,
            },
        });
        res.json({
            ok: true,
            msg: "Id se muestran los datos correctamente",
            resp,
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg:`Error: ${error}`,
        });
    }
};


const agregarAdministrador = async (req = request, res = response) =>{
    try {
        const {nombre, apellido, usuario, password, ...data} = req.body;
        data.nombre = nombre.toUpperCase();
        data.apellido = apellido.toUpperCase();
        data.usuario = usuario;
        data.password = password;
        const resp = await Administrador.create(data);
        res.json({
            ok: true,
            msg:'Administrador registrado correctamente',
            resp
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg:`Error: ${error}`,
        });
    }
};


const modificarAdministrador = async (req = request, res = response) =>{
    try {
        const { id } = req.params;
        const {nombre, apellido, usuario, password, ...data} = req.body;
        data.nombre = nombre.toUpperCase();
        data.apellido = apellido.toUpperCase();
        data.usuario = usuario;
        data.password = password;
        const resp = await Administrador.update(data, {
            where: {
                id,
            },
        });
        res.json({
            ok:true,
            msg:"Se actualizo con exito los datos",
            resp,
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg:`Error: ${error}`,
        });
    }
};


const eliminarAdministrador = async (req = request, res = response) =>{
    try {
      const { id } = req.params;
      const { estado } = req.query;
      const data = {
        estado,
      };
      const resp = await Administrador.update(data, {
        where:{
            id,
        },
      });
      res.json({
        ok: true,
        msg: estado === '1'? "Se habilito el administrador con exito":"Se deshabilito el administrador con exito",
        resp,
      })
    } catch (error) {
        res.status(400).json({
            ok:false,
            msg:`Error: ${error}`,
        });
    }
};


module.exports = {
    mostrarAdministrador,
    mostrarIdAdministrador,
    agregarAdministrador,
    modificarAdministrador,
    eliminarAdministrador
};