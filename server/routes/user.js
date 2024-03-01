import express from "express";;
import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const router = express.Router();


router.post('/signup',async (req, res)=>{
    const {username, email, password} = req.body
    const user = await User.findOne({email})
    if(user){
        return res.json({message:"User is Already Exist"})
    }

    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        username,
        email,
        password:hashpassword,
    });

    await newUser.save();
    return res.json({status: true, message: "Registered Successfully"})

})

router.post('/login', async (req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email})
    if(!user) {
        return res.json({message: "User is not Registered"})
    }
    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword){
        return res.json({message: "Password is incorrect"})
    }


    const token = jwt.sign({username: user.username}, process.env.KEY, {expiresIn: '1h'})
    res.cookie('token', token, {httpOnly: true, maxAge: 360000})
    return res.json({status: true, message: "login Successfully"})
})

router.post('/forgotpassword',async (req,res)=>{
    const {email} = req.body;
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.json({message: "User is Not registered"})
        }
        const token = jwt.sign({id: user._id}, process.env.KEY, {expiresIn: "5m"})

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'vishvavignesh77@gmail.com',
                pass: 'bzbxalhipaevrthu'
            }
            });
            
            var mailOptions = {
            from: 'vishvavignesh77@gmail.com',
            to: email,
            subject: 'Reset Your Password',
            text: `http://localhost:5173/resetpassword/${token}`
            };
            
            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                res.json({status: true,message: "error sending email"})
            } else {
                res.json({status: true,message: "email sent"})
            }
            });
    } catch (error) {
        console.log(error);
    }
})

router.post('/resetpassword/:token',async (req,res)=>{
    const {token} = req.params;
    const {password} = req.body
    try {
        const decoded = await jwt.verify(token,process.env.KEY);
        const id = decoded.id;
        const hashpassword = await bcrypt.hash(password, 10)
        await User.findByIdAndUpdate({_id:id},{password:hashpassword})
        return res.json({status: true,message:"Updated Password"})
    } catch (error) {
        return res.json({message:"Invalid Token"})
    }
})

const verifyuser = async (req, res, next)=>{
    try {
    const token = req.cookies.token;
    if(!token){
        return res.json({status: false, message:"No Token"})
    }
    const decoded = await jwt.verify(token,process.env.KEY);
    next();

    } catch (error) {
        return res.json(error);
    }
}

router.get('/verify',verifyuser, (req,res)=>{
    return res.json({status:true, message: "Authorized"})
});

router.get('/logout',(req,res)=>{
    res.clearCookie('token')
    return res.json({status:true,message:"Logout Successfully"})
})


export {router as UserRouter};