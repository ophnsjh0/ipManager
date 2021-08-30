import express from "express";
import {getAreaUpload, postAreaUpload, areaDelete} from "../controllers/areaController";

const areaRouter = express.Router();

areaRouter.route("/upload").get(getAreaUpload).post(postAreaUpload);
areaRouter.get("/delete", areaDelete);

export default areaRouter;
