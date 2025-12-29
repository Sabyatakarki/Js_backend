import{AuthService}from"../services/auth.service";
import{createUserDto, CreateUserDto}from "../dtos/user.dtos";
import z from "zod";
import{Request,Response}from"express";
import { success } from 'zod';
import { error } from "console";
let authService=new AuthService();
export class AuthController{
    async registerUser(req:Request,res:Response){
        try{
            const parsedData=createUserDto.safeParse(req.body);
            if(!parsedData.success){
                return res.status(400).json(
                    {success:false,message:z.prettifyError(parsedData.error) }
                );
            }
            const newUser=await authService.registerUser(parsedData.data);
            return res.status(201).json(
                {success:true,data:newUser,message:"User registered successfully"}
            );
        }catch(error:Error| any){
            return res.status(error.statusCode || 500).json(
                {success:false,message:error.message||"Internal server error"}
            );
        } 
    }
}