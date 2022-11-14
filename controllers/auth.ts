import {Request, Response } from 'express';
import {users} from "../db"
import {validationResult } from 'express-validator';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const signUp = async (req:Request,res:Response)=>{  
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }    
    let user = users.find((user)=>{
        return user.email===email
     })
    if(user){
        return res.status(400).json({
            "errors": [
                {
                    "msg": "User already exists",
                }
            ]
        })
    }
    const hashedPassword = await bcrypt.hash(password,10)
    users.push({email,password:hashedPassword})
    const token = jwt.sign({email},"zEW|UGl__Cb,_i2VgynWX{s2$$72S",{expiresIn:36000000})    
    res.json({token})
} 


export const login= async (req:Request,res:Response)=>{
    const { email, password } = req.body;
    let user = users.find((user)=>{
        return user.email===email
     })
     if(!user){
        return res.status(400).json({
            "errors": [
                {
                    "msg": "Invalid Crendentials",
                }
            ]
        })
    }
    let isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).json({
            "errors": [
                {
                    "msg": "Invalid Crendentials",
                }
            ]
        })
    }
    const token = jwt.sign({email},"zEW|UGl__Cb,_i2VgynWX{s2$$72S",{expiresIn:36000000})
    res.json({token})
}


export const getAllUsers=(req:Request,res:Response)=>{
    res.json(users)
}