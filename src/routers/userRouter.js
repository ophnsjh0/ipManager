import express from "express";
import {profile, singup, userRemove, userEdit} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", profile);
userRouter.get("/singup", singup);
userRouter.get("/remove", userRemove);
userRouter.get("/edit", userEdit);

export default userRouter;
