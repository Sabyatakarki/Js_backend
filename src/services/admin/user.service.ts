import { UserRepository } from "../../repositories/auth.repository";
import { Request,Response } from "express";
import { CreateUserDto } from "../../dtos/user.dtos";
import { HttpError } from "../../errors/http-error";

let userRepository=new UserRepository();

export class AdminUserService{
    async createUser(data:CreateUserDto){
        // check duplicate email,username
    }
    async getAllUsers(){
        let users=await userRepository.getAllUsers();
        return users;
    }
    async getUserById(userId:string){
        let user=await userRepository.getUserById(userId);
        if(!user){
            throw new HttpError(404,"User not found");
        }
        return user;
    }
}