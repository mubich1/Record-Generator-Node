import mongoose from "mongoose";
import http from "http";

export const port = 3000;
export const uri = 'mongodb+srv://we_gather12:Pakistan12@cluster0.szuj8lh.mongodb.net/test'

/**
 * To set up Database Connection
 */
 export const configureDatabase = () => {
    mongoose.connect(uri)
        .then(() => {
            console.log('Connected to database!', uri);
        })
        .catch(error => {
            console.log('Connection failed!:', error);
        });
}

/**
 * Starts the Http serve at given port.
 * @param app Express App
 */
 export const startServer = (app: any) => {
    const server = http.createServer(app);
    server.listen(port, () => {
        console.log(`Express server listening on port ${port}`);
    });
}