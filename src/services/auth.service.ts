import { UserRepository} from "../repositories/auth.repository";
import { CreateUserDto } from "../dtos/user.dtos";
import bycrypt from "bcryptjs";
import { HttpError } from "../errors/http-error";

let userRepository = new UserRepository();

export class AuthService{
    async registerUser(data:CreateUserDto){
        //login to register user,duplicate check ,haassh
        const emailExists=await new UserRepository().getUserByEmail(data.email);
        if(emailExists){
            throw new Error("Email already in use");
        }
        const usernameExists=await new UserRepository().getUserByUsername(data.username);
        if(usernameExists){
            throw new Error("Username already in use");
        }
        const hashedPassword=await bycrypt.hash(data.password,10);
        data.password=hashedPassword;
        const newUser=await new UserRepository().createUser(data);
        return newUser;
    }
}