// Importing Express.js
import express from "express";
import {PORT, mongoDBURL} from "./config.js"
// Mongo DB Library to connect to a mongodb database
import mongoose from 'mongoose';
// Importing book module from its folder
import {Book} from './models/bookModel.js';
// Routing the book routing file to index.js, for some reason booksRoute.js doesn't work but just booksRoute does
import booksRoute from './routes/booksRoute';
// Importing CORS to allow for authorized access
import cors from 'cors';

const app = express();

// Middleware for parsing request body (via POSTMAN)
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allows all orgins by deault w/ cors(*)
 app.use(cors());
// Option 2: allow custom orgins
// Allows the usage of any http reqeusts that utilize:
// Orgin: essentially the main link
// Methods: allowed methods that our router files utilize
// Content Type: ??
// app.use(
//     cors({
//         origin: 'http://localhost:5555',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )

// Creating 1st http method, gettign resource from server
// 1st Parameter: std for route
// 2nd Paramter: Call back function
app.get('/', (request, response) => {
    console.log(request);
    // Printing out this message within the local host
    return response.status(234).send('Initial MERN Stack Learning');
});

// For every http request that has the books, utilize any route from the booksRoute file
// Allows us to modulize any route files that we have
app.use('/books', booksRoute);


// Connecting to MongoDB Database, allows for interacting w/ MongoDB w/ JS commands
mongoose 
    // Connecting w/ MongoDBURL within Config.js
    .connect(mongoDBURL)
    // Then & Catch sees if successfully connected to MongoDB or if not
    .then(() => {
        // Connection Succsessful
        console.log('App connected to Database')
        // Ensures that open the Port if connection is successful
        // Listening to the PORT
        // () => is a callback function
        app.listen(PORT, () => {
            // Confirm that app is listening to port and that the server is running as intended
            // Within backend utilize -> npm run dev
            // If called w/o http link and go to localhost:(port number), will show Cannot GET /
            console.log(`App is listening to port: ${PORT}`)

        });
    })
    // Catches the error w/ connecting to mongodb
    .catch((error) => {
        console.log(error);
    });