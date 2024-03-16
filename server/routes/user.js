import express from 'express';
import bcrypt from 'bcrypt';
const router = express.Router();
import { User } from '../models/User.js'
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer'


router.post('/sign-up', async (req, res) => {
    const {
        userName,
        email,
        password,
    } = req.body
    const user = await User.findOne({email});
    if(user) {
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

router.post('/login', async (req,res) => {
    const {email, password } = req.body;
    const user = await User.findOne({email})
    if(!user){
        return res.json({message: 'oops, we didn\'t find that user'})
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.json({message: 'incorrect password'});
    }
    const token = jwt.sign(
        {username: user.userName}, 
        process.env.KEY,
        {expiresIn: '1h'})

    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 })
    return res.json({status: true, message: "login successful"});
    
})

router.post('/forgot-password', async (req, res) => {
    const {email} = req.body
    try {
        const user = await User.findOne({email})
        if(!user) {
            return res.json({message: "User doesn't exist"})
        } 
        const token = jwt.sign( {id: user._id}, process.env.KEY, {expiresIn: '5m'})
        //nodemailer create mail code
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'gasulliv@gmail.com',
              pass: 'dkiycaamjypbbcde'
            }
          });
          
          var mailOptions = {
            from: 'gasulliv@gmail.com',
            to: email,
            subject: 'Reset Password',
            //after opening email, check token again.
            text: `http://localhost:3000/reset-password/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              return res.json({message: "Issue sending email" });
            } else {
              console.log({status: true, message: 'Email sent'});
              return res.json({status: true, message: "password sent!"});
            }
          });

    } catch(err) {
        console.log(err);
    }
});

router.post('/reset-password/:token', async (req, res) => {
    const {token} = req.params.token;
    const {password} = req.body
    try {
        const decoded = await jwt.verify(token, process.env.KEY);
        const id = decoded.id;
        const hashPassword = await bcrypt.hash(password, 10);
        await User.findByIdAndUpdate({_id:id} , {password: hashPassword})
        return res.json({message: 'password updated!'})
    } catch (err){
        console.log(err)
        return res.json({message: 'password not updated!'})
    }
})

const verifyUser = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if(!token) {
            return res.json({status: false, message: 'no token found'})
        }
        const decoded = await jwt.verify(token, process.env.KEY);
        next();

    } catch(err) {
        return res.json(err)
    }
}

router.get('/verify', verifyUser, (req,res) =>{
    return res.json({status: true, message: 'authorized'})
})

router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({status: true})
})

router.get('/current-user', (req, res) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json({status: false, message: 'no token found'})
    }
    return res.json();
})


export { router as UserRouter }