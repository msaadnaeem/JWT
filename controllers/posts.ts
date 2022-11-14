import {Request, Response,NextFunction } from 'express';
import { publicPosts,privatePosts } from '../db';
export const getPublicPosts=(req:Request,res:Response)=>{
    res.json(publicPosts)
}
export const getPrivatePosts=(req:Request,res:Response)=>{
    console.log('login passed');
    
    res.json(privatePosts)
}

