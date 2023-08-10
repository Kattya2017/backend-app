const { Router } = require("express");
const { mostrarAdministrador, mostrarIdAdministrador, agregarAdministrador, modificarAdministrador, eliminarAdministrador } = require("../controllers/administrador");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares");
const { validarUsuarioAdministrador } = require("../helpers");



const router = Router();
router.get("",mostrarAdministrador);
router.get("/:id",mostrarIdAdministrador);
router.post("",agregarAdministrador);
router.put("/:id",modificarAdministrador);
router.delete("/:id",eliminarAdministrador);

module.exports = router;