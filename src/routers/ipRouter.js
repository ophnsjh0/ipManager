import express from "express";
import {dashboard, ipUpload, ipRemove, ipEdit, search} from "../controllers/ipController";


const ipRouter = express.Router();

ipRouter.get("/", dashboard);
ipRouter.get("/upload", ipUpload);
ipRouter.get("/remove", ipRemove);
ipRouter.get("/edit", ipEdit);
ipRouter.get("/search", search);

export default ipRouter;
