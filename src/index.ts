import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from "./config/db";
import authRoutes from './routes/auth.routes';

dotenv.config();

const app=express();
const PORT=process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', authRoutes);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server Started at PORT: ${PORT}`);
})