import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/IP_Manager");

const db = mongoose.connection

const handleError = (error) => console.log("😡 DB Error",);
const handleOpen = () => console.log("👍 Connected to DB ");

db.on("error", handleError);
db.once("open", handleOpen);
