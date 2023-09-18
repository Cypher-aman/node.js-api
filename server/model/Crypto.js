import mongoose from "mongoose";
//  name, last, buy, Sell, volume, base_unit
const cryptoSchema = new mongoose.Schema({
  name: String,
  last: Number,
  sell: Number,
  buy: Number,
  volume: Number,
  base_unit: String,
});

const Crypto = new mongoose.model("Crypto", cryptoSchema);

export default Crypto;
