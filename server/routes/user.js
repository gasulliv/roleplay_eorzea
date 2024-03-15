import express from 'express';
import bcrypt from 'bcrypt';
const router = express.Router();
import { User } from '../models/User.js'

router.post('/sign-up', async (req, res) => {
    const {
        userName,
        email,
        password
    } = req.body
    User.find({email});
    if(User) {
        return res.json({
            message: "User already exists"
        })
    }
    const hashPswrd = await bcrypt.hash(password,10);
    const newUser = new User({
        userName,
        email,
        password: hashPswrd
    });

    await newUser.save();
    return res.json({message: "user registered"})
})

export { router as UserRouter }