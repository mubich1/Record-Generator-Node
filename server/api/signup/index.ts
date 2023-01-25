import * as SignupController from './signup-controller';
import express from "express";

const routes = express.Router();

routes.post('/createAccount',SignupController.createUserAccount)

export = routes