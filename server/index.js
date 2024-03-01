import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { UserRouter } from "./routes/user.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}));
app.use(cookieParser());
app.use('/auth',UserRouter);

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Mongo Database is Connected");
    } catch (error) {
        console.log(error);
    }
}

app.listen(process.env.PORT, ()=>{
    connect();
    console.log("server is running",process.env.PORT);
})