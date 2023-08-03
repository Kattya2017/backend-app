const { Router } = require("express");
const {mostrarPalabra, agregarPalabra, mostrarIdPalabra, modificarPalabra, eliminarPalabra, putAudioPalabra, modificarAudioPalabra, mostrarPalabraAbecedario} = require("../controllers/palabra");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarArchivoSubir } = require("../middlewares/validar-archivo");

const router = Router();

router.get("", mostrarPalabra);
router.get("/:id", mostrarIdPalabra);
router.get("/abecedario/:id", mostrarPalabraAbecedario);
router.post("", [validarArchivoSubir, validarCampos], agregarPalabra);
router.put("/:id", [validarCampos], modificarPalabra);
router.put('/palabra/:id',[
    validarArchivoSubir,
    validarCampos
], modificarAudioPalabra);
router.delete("/:id", eliminarPalabra);

module.exports = router;
