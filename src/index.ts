import express from "express";
import cors from 'cors';
import { connectDB } from "./config/db";
import authRoutes from './routes/auth.routes';
import companyRoutes from './routes/company.routes';
import { ENV_CONFIG } from "./config/env";

const app=express();
const PORT=ENV_CONFIG.port;

app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/company', companyRoutes);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server Started at PORT: ${PORT}`);
})