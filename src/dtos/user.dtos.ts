import z from"zod";
import { userSchema } from "../types/user.type";
export const createUserDto = userSchema.pick(
    {
        firstName:true,
        lastName:true,
        email:true,
        username:true,
        password:true,
    }
).extend(//add new attribute
    {
        confirmPassword:z.string().min(6),
    }
).refine(
    (data)=>data.password===data.confirmPassword,
    {
        message:"Password and conform passsword do not match",
        path:["confirmPassword"],//thorws error in confirm password feild
    }
)
export type CreateUserDto = z.infer<typeof createUserDto>;
    