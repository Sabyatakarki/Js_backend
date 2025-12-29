import mongoose,{Document,Schema} from "mongoose";
import{UserType}from"../types/user.type";

const userSchema:Schema = new Schema(
    {
        firstName:{type:String},
        lastName:{type:String},
        email:{type:String,required:true,unique:true},
        username:{type:String,required:true,unique:true},
        password:{type:String,required:true},
    },
    {
        timestamps:true,
    }
)
export interface IUser extends UserType,Document{
    _id:mongoose.Types.ObjectId;
    createdAt:Date;
    updatedAt:Date;
}
export const UserModel = mongoose.model<IUser>("User",userSchema);
//collection name users('plural of user')
//UserModel-> db.users
