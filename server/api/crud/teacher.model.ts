import { model, Schema } from "mongoose";


let createUserSchema:Schema = new Schema({
    userId: {type: String, trim: true},
    name: { type:String, trim:true, required:false},
    age: { type:Number, trim:true,required:false},
    gender: { type:String, trim:true, required:false},
    phone: { type:String, trim:true, required:false},
    email: { type:String, trim:true, required:false},
    dob: { type:String, trim:true, required:false},
    city: { type:String, trim:true, required:false},

})

const createUser = model("createTeacher",createUserSchema);
export default createUser;