import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './lib/db.js';
import authRoutes from './routes/authRoutes.js';
import roadmapRoutes from './routes/roadmapRoutes.js';


const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(cors(
    {
        origin: process.env.CLIENT_URL || 'http://localhost:5173',
        credentials: true,
    }
));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/roadmap", roadmapRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});