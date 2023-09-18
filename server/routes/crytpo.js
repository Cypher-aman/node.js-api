import { Router } from "express";
import { fetchData } from "../controller/crypto.js";

const route = Router();

route.get("/crypto", fetchData);

export default route;
