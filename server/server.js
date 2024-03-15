import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();
import mongoose from 'mongoose';
import { UserRouter } from './routes/user.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', UserRouter)
mongoose.connect('mongodb://localhost:27017/roleplay-eorzea')

app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
});