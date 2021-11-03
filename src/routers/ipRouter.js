import express from "express";
import {dashboard, getIpUpload, postIpUpload, ipRemove, ipEdit, search, watch} from "../controllers/ipController";


const ipRouter = express.Router();

ipRouter.get("/", dashboard);
ipRouter.get("/:id", watch);
ipRouter.route("/:id/upload/").get(getIpUpload).post(postIpUpload);
ipRouter.get("/remove", ipRemove);
ipRouter.get("/edit", ipEdit);
ipRouter.get("/search", search);

export default ipRouter;
