import * as CrudController from './teacher.controller';
import express from 'express';

const router = express.Router();

router.post("/createUser",CrudController.createUserRecord);
router.get("/userRecord" ,CrudController.getUserRecord);
router.delete("/removeuser/:id", CrudController.removeUserRecord);
router.put("/update/:id", CrudController.updateUserRecord);
router.get("/getById/:id",CrudController.getUserRecordById);

export = router