const { request, response } = require("express");
const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");
const generarToken = require("../helpers/generar-jwt");
const Administrador = require("../models/administrador");

/*const postLogin = async (req = request, res = response) => {
    const { coleccion } = req.params;
    let password;
    let usuario;
    let validarPassword;
    let token;
    switch (coleccion) {
      case "usuario":
        usuario = req.body.usuario;
        password = req.body.password;
        const user = await Usuario.findOne({ usuario });
        if (!user) {
          return res.json({
            ok: false,
            msg: "Usuario no existe, converse con el administrador",
            user: null,
            token: null,
          });
        }
        if (!user.estado) {
          return res.json({
            ok: false,
            msg: "Usuario bloqueado, converse con el administrador",
            user: null,
            token: null,
          });
        }
        validarPassword = bcryptjs.compareSync(password, user.password);
        if (!validarPassword) {
          return res.json({
            ok: false,
            msg: "Contraseña no valida",
            user: null,
            token: null,
          });
        }
        token= await generarToken.generarJWT(user._id);
        res.json({
          ok: true,
          msg: "Login correcto",
          user,
          token
        });
        break;
      default:
        break;
    }
  };*/

const postLogin = async(req = request, res = response)=>{
const {usuario, password} = req.body;
const user = await Administrador.findOne({
  where:{
    usuario
  }
});
if (!user) {
  return res.json({
    ok: false,
    msg: 'Usuario no existe, converse con el administrador',
    user: null,
    token: null,
  });
}
if(!user.estado){
  return res.json({
    ok: false,
    msg: 'Usuario bloqueado, converse con el administrador',
    user: null,
    token: null,
  });
}
console.log(password);
if (password!==user.password) {
  return res.json({
    ok: false,
    msg:'Contraseña no validad',
    user: null,
    token: null,
  });
}
token = await generarToken.generarJWT(user.id);
res.json({
  ok: true,
  msg: 'Login correcto',
  user,
  token,
});
} 



const resetPasswords=async(req = request, res=response)=>{
  try {
      const {passworduno, passworddos} = req.body;
      const admin = req.adminToken;

      if(passworduno!==admin.password){
        return res.json({
          ok:false,
          msg:'Password anterior incorrecto'
        })
      }
      const resp = await Administrador.update({password:passworddos},{
        where:{
          id:admin.id
        }
      })

      res.json({
        ok: true,
        msg: 'Se actualizo el password con exito',
        resp
      })
    } catch (error) {
      res.status(400).json({
        ok: false,
        msg:`Error: ${error}`
      })
    }
  }

  module.exports = {
      postLogin,
      resetPasswords
  }