import Crypto from "../model/Crypto.js";
//  name, last, buy, Sell, volume, base_unit
export const populate = async (data) => {
  try {
    for (let i = 0; i < 10; i++) {
      const { name, last, buy, sell, volume, base_unit } = data[i];
      const crypto = new Crypto({
        name,
        last,
        buy,
        sell,
        volume,
        base_unit,
      });

      await crypto.save();
    }
  } catch (error) {
    console.log("populate: ", error.message);
  }
};
