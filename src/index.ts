import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./config/db";
dotenv.config();

const app=express();
const PORT=process.env.PORT;

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server Started at PORT: ${PORT}`);
})