const { Router } = require("express");
const { crearCrypto, getMonedas } = require("../controllers/crypto");
const router = Router();

router.get("/", getMonedas);
router.post("/", crearCrypto);

module.exports = router;
