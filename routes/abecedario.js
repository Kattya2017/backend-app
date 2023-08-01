const { Router } = require("express");
const { mostrarAbecedario, mostrarIdAbecedario, agregarAbecedario, modificarAbecedario, eliminarAbecedario } = require("../controllers/abecedario");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarAbecedario } = require("../helpers/db-validators");



const router = Router();

router.get("", mostrarAbecedario);
router.get("/:id", mostrarIdAbecedario);
router.post("",[
    check('abecedario').custom(validarAbecedario),validarCampos
], agregarAbecedario);
router.put("/:id", modificarAbecedario);
router.delete("/:id", eliminarAbecedario);

module.exports = router;