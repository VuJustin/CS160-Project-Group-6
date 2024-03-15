import express from 'express';
import { User } from '../models/userModel.js';

const router = express.Router();

// Route for Signup
router.post('/signup', async (request, response) => {
    try {
        const { name, email, password } = request.body;
        if (!name || !email || !password) {
            console.log(name);
            console.log(email);
            console.log(password);
            return response.status(400).send({
                error: 'Complete all required fields: name, email, password'
            });
        }
        

        const query = User.findOne({ email: request.body.email });
        query.select("password")
        const existUser = await query.exec();

        if (existUser) {
            return response.status(401).send({ error: 'User already exist!' });
        }

        const newUser = new User({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password
        });

        const user = await newUser.save();

        return response.status(201).send(user);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Login
router.post('/login', async (request, response) => {
    try {
        // Finding the user w/ the correct email
        const query = User.findOne({email: request.body.email});
        query.select("password")
        const user = await query.exec();
        
        if (!user) {
            return response.status(401).send({ error: 'User not found!' });
            //return response.status(404).send("User not found");
           // return
        }

        // Checking if user password matches the body password here
        const isValidPassword = request.body.password === user.password;

        // If password is valid
        if (isValidPassword) {
            return response.status(200).json({ message: 'Login Success'});
            // Send a login successful, (REQUIRED FOR FRONT END PAGE)
            //return response.send("Login Successful");
            
        } else {
            return response.status(401).send({ error: 'wrong password!'});
            //return response.send("Wrong Password or Email");
        }

    }   catch  (error)   {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;