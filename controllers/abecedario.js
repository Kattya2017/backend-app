const { request, response } = require("express");
const Abecedario = require("../models/abecedario");



const mostrarAbecedario = async (req = request, res = response) =>{
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

const mostrarIdAbecedario = async (req = request, res = response) =>{
    try {
        const { id } = req.params;
        const resp = await Abecedario.findOne({
            where:{
                id,
            }
        })

        res.json({
            ok:true,
            msg:"Se muestra el abecedario con extio",
            resp,
        });
    } catch (error) {
        res.status(400).json({
            ok:false,
            msg:`Error: ${error}`
        });
    }
};

const agregarAbecedario = async (req = request, res = response) =>{
try {
    const { abecedario, abecedario_shipibo, titulo, titulo_shipibo, ...data } = req.body;
    data.abecedario = abecedario.toUpperCase();
    data.abecedario_shipibo = abecedario_shipibo;
    data.titulo = titulo.toUpperCase();
    data.titulo_shipibo = titulo_shipibo;

    const resp = await Abecedario.create(data);
    res.json({
        ok:true,
        msg:'Datos ingresados correctamente',
        resp
    });
} catch (error) {
    res.status(400).json({
        ok:false,
        msg:`Error: ${error}`
    });
}
};

const modificarAbecedario = async (req = request, res = response) =>{
try {
    const { abecedario, abecedario_shipibo, titulo, titulo_shipibo, ...data } = req.body;
    const { id } = req.params;
    
    data.abecedario = abecedario.toUpperCase();
    data.abecedario_shipibo = abecedario_shipibo;
    data.titulo = titulo.toUpperCase();
    data.titulo_shipibo = titulo_shipibo;

    const resp = await Abecedario.update(data,{
        where:{
            id,
        },
    });

    res.json({
        ok:true,
        msg:'Se actualizo los datos con exito',
        resp,
    });
    
} catch (error) {
    res.status(400).json({
        ok:false,
        msg:`Error: ${error}`,
    })
}
};

const eliminarAbecedario = async (req = request, res = response) =>{
    try {
        const { id } = req.params;
        const { estado } = req.query;
        const data = {
            estado,
        };
        const resp = await Abecedario.update(data,{
            where:{
                id,
            },
        });
        res.json({
            ok:true,
            msg:
            estado === '1'? "Se habilito el abecedario con exito":"Se deshabilito el abecedario con exito",
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
    mostrarAbecedario,
    mostrarIdAbecedario,
    agregarAbecedario,
    modificarAbecedario,
    eliminarAbecedario
};