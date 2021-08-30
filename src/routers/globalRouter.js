import express from "express";
import {home} from "../controllers/areaController";

const globalRouter = express.Router();

globalRouter.get("/", home);


export default globalRouter;
