import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { UserRouter } from './routes/user.js';
import { User } from './models/User.js'

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}));
app.use(cookieParser());

app.use('/auth', UserRouter)

mongoose.connect('mongodb://localhost:27017/roleplay-eorzea')

app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
});