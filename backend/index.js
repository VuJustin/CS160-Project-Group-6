import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import userRoute from './routes/userRoute.js';
import cors from 'cors';


const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(201).send("Welcome to the DAS");
});

// Middleware for parsing request body
app.use(express.json());
app.use(cors());
app.use('/user', userRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('DAS connected to Media-Library');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });