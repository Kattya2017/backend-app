const { Router } = require("express");
const { mostrarSignificado, mostrarIdSignificado, agregarSignificado, modificarSignificado, eliminarSignificado } = require("../controllers/significado");

const router = Router();

router.get("", mostrarSignificado);
router.get("/:id", mostrarIdSignificado);
router.post("", agregarSignificado);
router.put("/:id", modificarSignificado);
router.delete("/:id", eliminarSignificado);

module.exports = router;