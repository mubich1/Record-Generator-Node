import signUpModel from "./signup-model"
const Mongoose = require('mongoose');
const objectId  = Mongoose.Types.ObjectId

export const createUserAccount = async(req:any , res:any) => {
    try{
    const user = await signUpModel.create(req.body);
    if(user){
        res.status(200).json({
            status: 'Success',
            message: 'Account created successfully',
            data: user
        })
    } else {
        res.status(204).json({
            status: 'Error',
            message: 'Error on creating new account'
        })
    }

    } catch (error){
        throw new Error('Error on creating new account')
    }
}