import * as StudentController from "./student-controller";
import  express  from "express";

 const router = express.Router();
router.post("/createStudent", StudentController.createStudentRecord);
router.get("/getStudent", StudentController.getAllStuddent);
router.delete("/deleteStudentbybid/:id",StudentController.deleteStudentById)
router.get("/getStudentId/:id",StudentController.getStudentRecordbyid)
router.put("/updateStudentById/:id",StudentController.updateStudentRecordById)

export = router