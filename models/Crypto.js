const { Schema, model } = require("mongoose");

const CryptoSchema = Schema({
  nombre: {
    type: String,
  },
  usd: {
    type: String,
  },
});

CryptoSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("Crypto", CryptoSchema);
