import login from "./login-model";
const Mongoose = require("mongoose");
const ObjectId = Mongoose.Types.ObjectId;


export const createUserAccount = async (req:any,res:any) =>{
    try{
        const newUser:any = login.create(req.body)
        if(newUser){
            res.status(200).json({
                status: 'success',
                message: 'Account created successfully',
                data: newUser
            })
        }else{
            res.status({
                status: 'error',
                message: 'error on creating account'
            })
        }
    }
    catch (error){
        throw new Error('Error in creating new account')
    }
}