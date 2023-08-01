const { request, response } = require("express");
const Palabra = require("../models/palabra");
const path = require("path");
const fs = require("fs");
const { subirArchivo } = require("../helpers/subir-archivo");


const mostrarPalabra = async (req = request, res = response) =>{
try {
    res.json({
        ok:true,
        msg:"Se muestra los datos correctamente"
    })
} catch (error) {
    res.status(400).json({
        ok:false,
        msg:`Error: ${error}`
    });
}
};


const mostrarIdPalabra = async ( req = request, res = response) =>{
    try {
        const { id } = req.params;
        const resp = await Palabra.findOne({
            where:{
                id,
            }
        });
        res.json({
            ok:true,
            msg:'Se muestra la palabra con exito',
            resp,
        })
    } catch (error) {
        res.status(400).json({
            ok:false,
            msg:`Error: ${error}`
        });
    }
};


const agregarPalabra = async (req = request, res = response) =>{
    try {
        const { titulo, titulo_shipibo, descripcion, descripcion_shipibo, audio, ...data } = req.body;
        const files = req.files;
        const nombre = await subirArchivo(files,['mp3'], 'audios');

        data.titulo = titulo;
        data.titulo_shipibo = titulo_shipibo;
        data.descripcion = descripcion;
        data.descripcion_shipibo = descripcion_shipibo;
        data.audio = nombre;

        const resp = await Palabra.create(data);
        res.json({
            ok: true,
            msg:"Palabras ingresadas correctamente",
            resp,
        })
    } catch (error) {
        res.status(400).json({
            ok:false,
            msg:`Error: ${error}`
        });
    }
};


const modificarPalabra = async (req = request, res = response) =>{
    try {
        const { titulo, titulo_shipibo, descripcion, descripcion_shipibo, ...data } = req.body;
        const { id } = req.params;

        data.titulo = titulo;
        data.titulo_shipibo = titulo_shipibo;
        data.descripcion = descripcion;
        data.descripcion_shipibo = descripcion_shipibo;
       
        const resp = await Palabra.update(data,{
          where:{
            id
          }
        })
        res.json({
            ok:true,
            msg:"Se actualizo con exito los datos",
            resp
        });
    } catch (error) {
        res.status(400).json({
            ok:false,
            msg:`Error: ${error}`
        })
    }
};


const modificarAudioPalabra = async (req = request, res = response)=>{
try {
  const { id } = req.params;
  const file = req.files;
  const resp = await Palabra.findOne({
    where: {
      id,
    },
  });
  if (resp.audio) {
    const pathAudio = path.join(
      __dirname,
      "../uploads",
      "audios",
      resp.audio
    );
    if (fs.existsSync(pathAudio)) {
      fs.unlinkSync(pathAudio);
    }
  }
  const audio = await subirArchivo(file, ['mp3'], "audios");
  const actualizar = await Palabra.update({
    audio,},{
      where:{
          id,
      },
  });
  res.json({
    ok:true,
    msg:"Se actualizo con exito el audio",
    resp:actualizar,
  })
} catch (error) {
  res.status(400).json({
    ok:false,
    msg:`Error: ${error}`
  })
}
};
  

const eliminarPalabra = () =>{
};


module.exports = {
    mostrarPalabra,
    mostrarIdPalabra,
    agregarPalabra,
    modificarPalabra,
    modificarAudioPalabra,
    eliminarPalabra
};