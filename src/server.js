import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import areaRouter from "./routers/areaRouter";
import ipRouter from "./routers/ipRouter";
import userRouter from "./routers/userRouter";



const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + `/src/views`);
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/area", areaRouter);
app.use("/ip", ipRouter);
app.use("/users", userRouter);

export default app;
