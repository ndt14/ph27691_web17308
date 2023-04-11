
import express from "express";
import productRouter from "../src/routes/product";
import authRouter from "../src/routes/auth";
import categoryRouter from "../src/routes/category";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

//đăng ký middleware" giải mã dữ liệu json
app.use(express.json())
app.use(cors());

// router
app.use("/api",productRouter);
app.use("/api", authRouter);
app.use("/api", categoryRouter);
    
mongoose.connect("mongodb://127.0.0.1:27017/assignment").then(()=>{
    console.log("DB is connected");
}).catch(()=>{
    console.log("Error connecting");
});

export const viteNodeApp = app;

