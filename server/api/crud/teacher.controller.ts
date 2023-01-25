import createUser from "./teacher.model";
const Mongoose = require("mongoose");
const ObjectId = Mongoose.Types.ObjectId;

/**
 * Create new Record
 * @param req 
 * @param res 
 */
export const  createUserRecord = async(req:any , res:any) =>{
    try {
        const user = req.body
        console.log(user)
        const addNewUser = await createUser.create(user);
        addNewUser ? 
        res.status(200).json({
            status : 'User Created',
            message: 'User created successfully',
            data : addNewUser
        }) :
        res.status(204).json({
            status: 'Error',
            message: 'Creating User Faild'
        })
    } catch (error:any) {
        console.log("Getting error creating record" , error);
        throw new Error("Error creating record");
    }
}

export const getUserRecord = async(req:any , res:any) =>{
    try{
        const users = await createUser.find();
        users.length ?
        res.status(200).json({
            status  :  'Success',
            message: 'Get users record successfully',
            data : users
        }) : 
        res.status({
            status: 'Error',
            message: 'getting record faild'
        })
    } catch (error:any){
        throw new Error("Error on getting record")
    }
}

export const removeUserRecord = async(req:any, res:any) => {
    try {
        const user: any = await createUser.findByIdAndDelete(new ObjectId(`${req.params.id}`));
        console.log('user: ', user);
        if (user) {
            return res.status(200).json({
                status: 'success',
                message: 'Deleted  Member successfully',
            });
        }

    } catch (error) {
        console.log("Error in Deleting  Member ", error);
        throw new Error("Error in Deleting  Member");
    }
}

export const updateUserRecord = async (req:any,res:any) =>{
    try{
        const userRecord = await createUser.findByIdAndUpdate(new ObjectId(`${req.params.id}`),req.body);
        res.status(200).json({
            status : 'Success',
            message: 'Record Updated successfully',
            data : userRecord
        })

        res.status(204).json({
            status : 'error',
            message : 'Error on update record'
        })

    } catch (error) {
        console.log("error on updating record");
        throw new Error("Error on Updating user record")
        
    }

}

export const getUserRecordById = async (req:any,res:any) =>{
    try{
        const userId = await createUser.findById(new ObjectId(req.params.id));
        
        if(userId?._id) {
            res.status(200).json({
                status : 'Success',
                message: 'Record get successfully',
                data : userId
            })
        } else {
            res.status(204).json({
                status : 'Success',
                message : 'No Data found'
            })
        }

    } catch (error) {
        res.status(404).json({
            status:'error',
            message:'Error on getting record'
        })
        console.log("error on geting record by id");
        throw new Error("Error on geting user record by id")
    }

}