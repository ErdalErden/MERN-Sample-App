import express from 'express'
import mongoose from 'mongoose'
import User from '../models/userModel.js'
import bcrypt from 'bcrypt'

const router = express.Router();

router.post("/signup", async (req,res)=>{
    try {
        const {fullname, password, phoneNumber, email} = req.body;
        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(400).json({message:'User already exist'})
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const createdUser = await User.create({
            fullname,
            email,
            password:hashedPassword,
            phoneNumber
        })
        return res.status(201).json(createdUser);
    } catch (error) {
        return res.json({message:'create user failed'})
    }
})

router.post("/signin", async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:'user does not exist'})
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect){
            return res.status(400).json({message:'Wrong password'})
        }
        return res.status(200).json({user, message:'Authentication successful'})
    } catch (error) {
        return res.json(error.message)
    }
})

export default router;