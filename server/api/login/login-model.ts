import { Model, Schema, model } from 'mongoose';

let login:Schema = new Schema({
    email: { type:String,required:false,trim:true},
    password: { type:String, required:false, trim:true}
})

const loginModel = model('loginModel',login);
export default loginModel   