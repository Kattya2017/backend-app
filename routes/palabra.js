const { Router } = require("express");
const { mostrarPalabra, agregarPalabra, mostrarIdPalabra, modificarPalabra, eliminarPalabra } = require("../controllers/palabra");

const router = Router();

router.get("", mostrarPalabra);
router.get("/:id", mostrarIdPalabra);
router.post("", agregarPalabra);
router.put("/:id", modificarPalabra);
router.delete("/:id", eliminarPalabra);

module.exports = router;