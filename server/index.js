import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import mongoose from "mongoose";
import { populate } from "./utils/shared.js";
import cryptoRoutes from "./routes/crytpo.js";
import cors from "cors";

const app = express();

/* INITIAL SETUP */
dotenv.config();
app.use(cors());

/* INITAL DATA FETCHING */
/* const fetchData = async () => {
  try {
    const res = await fetch("https://api.wazirx.com/api/v2/tickers");
    const data = await res.json();
    await populate(Object.values(data).slice(0, 10));
  } catch (error) {
    console.log(error.message);
  }
};
fetchData(); */

/* API ROUTES */
app.use("/api", cryptoRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 3001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log("Server started: ", PORT));
  });
