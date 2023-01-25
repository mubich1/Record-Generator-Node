import createStudent from "./student-model";
const Mongoose = require("mongoose");
const ObjectId = Mongoose.Types.ObjectId;


/**
 * Create new Record
 * @param req 
 * @param res 
 */
 export const  createStudentRecord = async(req:any , res:any) =>{
    try {
        const user = req.body
        console.log(user)
        const addNewUser = await createStudent.create(user);
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

export const getAllStuddent = async(req:any , res:any) =>{
    try{
        const record = await createStudent.find();
        record.length ? 
        res.status(200).json({
            status: 'success',
            message: 'Get student record successfully',
            data: record
        }) :
        res.status({
            status:  'Error',
            message: 'Error on getting record'
        })
    }
    catch (error:any){
        throw new Error("Error on getting student record");
    }
}

export const deleteStudentById = async(req:any,res:any) =>{
    try{
        const student = await createStudent.findByIdAndRemove(new ObjectId(`${req.params.id}`))
        if(student){
            res.status(200).json({
                status: 'success',
                message: 'Student record deleted successfully',
            })
        }

    } catch (error){
        throw new Error('Error on deleting record')
    }
}

export const getStudentRecordbyid = async(req:any , res:any) => {
    try{
        const id = await createStudent.findById(new ObjectId(`${req.params.id}`))
        if(id){
            res.status(200).json({
                status: 'success',
                message: 'Get student id successfully',
                data: id
            })
        }
    } catch (error){
        throw new Error('Error on getting id')
    }
}

export const updateStudentRecordById = async(req:any , res:any) =>{
    const updateStudent = await createStudent.findByIdAndUpdate(new ObjectId(`${req.params.id}`),req.body)
    if(updateStudent){
        res.status(200).json({
            status : 'success',
            message: 'Update student record successfully',
            data: updateStudent
        })
    } else {
        res.status({
            status : 'error',
            message: 'Error on updating student record'
        })
    }
}