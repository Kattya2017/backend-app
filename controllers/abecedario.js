const { request, response } = require("express");



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

const mostrarIdAbecedario = () =>{

};

const agregarAbecedario = () =>{

};

const modificarAbecedario = () =>{

};

const eliminarAbecedario = () =>{

};


module.exports = {
    mostrarAbecedario,
    mostrarIdAbecedario,
    agregarAbecedario,
    modificarAbecedario,
    eliminarAbecedario
};