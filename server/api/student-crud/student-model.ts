import { model, Schema } from "mongoose";


let studentSchema:Schema = new Schema({
    userId: {type: String, trim: true},
    firstName: { type:String, trim:true, required:false},
    lastName:{ type:String, trim:true, required:false},
    age: { type:Number, trim:true,required:false},
    gender: { type:String, trim:true, required:false},
    phone: { type:String, trim:true, required:false},
    email: { type:String, trim:true, required:false},
    city: { type:String, trim:true, required:false},
    state: { type:String, trim:true, required: false},
    address: {type:String, trim:true, required:false},
    class: { type:String, trim:true, required:false},
    subjects: { type:String, trim:true, required:false}
})

const createStudent = model("createStudent",studentSchema);
export default createStudent;