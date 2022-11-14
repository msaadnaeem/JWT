import {Request, Response,NextFunction } from 'express';
import JWT from 'jsonwebtoken';
export const checkAuth= async(req:Request,res:Response,next:NextFunction)=>{
    const token = req.header('x-auth-token')
    if(!token){
        return res.status(400).json({
            "errors": [
                {
                    "msg": "Please login to view this content",
                }
            ]
        })
    }
    try {
        const user= JWT.verify(token,"zEW|UGl__Cb,_i2VgynWX{s2$$72S")
        next()
    } catch (error) {
        return res.status(400).json({
            "errors": [
                {
                    "msg": "Token Invalid",
                }
            ]
        })
        
    }

}