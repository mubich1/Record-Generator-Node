import express from "express";
import { routes } from './routes';
import { startServer, configureDatabase } from './config';

const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors({
    origin: "*"
}
));


routes(app);
configureDatabase();
startServer(app);