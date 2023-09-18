import Crypto from "../model/Crypto.js";

export const fetchData = async (req, res) => {
  try {
    const crypto = await Crypto.find();
    res.status(200).json(crypto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
