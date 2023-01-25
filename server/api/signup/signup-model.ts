import { Schema, model } from 'mongoose';


let signUp =new Schema({
    name:{ type:String,trim:true,required:false},
    email:{type:String,trim:true,required:false},
    phone:{type:Number,trim:true,required:false},
    password:{type:String,trim:true,required:false},
    token: String,
})

export const signUpModel = model('signUpModel' , signUp);
export default signUpModel