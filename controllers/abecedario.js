const { request, response } = require("express");
const Abecedario = require("../models/abecedario");



const mostrarAbecedario = async (req = request, res = response) =>{
try {
    const {estado} = req.query;
    const resp = await Abecedario.findAll({
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
                    abecedario:resp[i].abecedario,
                    abecedario_shipibo:resp[i].abecedario_shipibo,
                    titulo:resp[i].titulo,
                    titulo_shipibo:resp[i].titulo_shipibo,
                    estado:resp[i].estado
                }
                array.push(obj)
            }
        }
    res.json({
        ok:true,
        msg:"Se muestra los datos correctamente",
        resp:array,
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
        });
        res.json({
            ok:true,
            msg:"Se muestra el abecedario con extio",
            resp
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