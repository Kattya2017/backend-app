const { Router, request, response } = require("express");
const { postLogin } = require("../controllers/auth");
const {validarCampos, validarJWT} = require('../middlewares')
const router = Router();




router.post('', postLogin);
router.put('/:password',[
    validarJWT,
    validarCampos
], postLogin);


module.exports = router;