const { Router } = require("express");
const { mostrarAbecedario, mostrarIdAbecedario, agregarAbecedario, modificarAbecedario, eliminarAbecedario } = require("../controllers/abecedario");



const router = Router();

router.get("", mostrarAbecedario);
router.get("/:id", mostrarIdAbecedario);
router.post("", agregarAbecedario);
router.put("/:id", modificarAbecedario);
router.delete("/:id", eliminarAbecedario);

module.exports = router;