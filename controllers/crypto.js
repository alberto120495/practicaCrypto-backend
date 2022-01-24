const { response } = require("express");
const Crypto = require("../models/Crypto");

const getMonedas = async (req, res = response) => {
  //console.log(req.body);
  const monedas = await Crypto.find();
  return res.status(200).json({
    ok: true,
    monedas: monedas,
  });
};

//? *****CREAR CRYPTO*****
const crearCrypto = async (req, res = response) => {
  const cryptoMoneda = new Crypto(req.body);
  try {
    const cryptoGuardado = await cryptoMoneda.save();
    res.status(201).json({
      ok: true,
      moneda: cryptoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el admin",
    });
  }
};

module.exports = { getMonedas, crearCrypto };
