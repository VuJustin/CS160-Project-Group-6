import express from 'express';
import { User } from '../models/userModel.js';

const router = express.Router();

// Route for Signup
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.email ||
            !request.body.password
        ) {
            return response.status(400).send({
                message: 'Complete all required fields: name, email, password'
            });
        }

        const newUser = {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password
        };

        const user = await User.create(newUser);

        return response.status(201).send(user);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Login
router.get('/login', async (request, response) => {
    try {
        // Finding the user w/ the correct email
        const query = User.findOne({email: request.body.email});
        query.select("password")
        const user = await query.exec();
        
        if (!user) {
            return response.status(404).send({ error: 'User not found!' });
        }

        // Checking if user password matches the body password here
        const isValidPassword = request.body.password === user.password;

        // If password is valid
        if (isValidPassword) {
            return response.status(200).json({ message: 'account found!', user_data: user });
        } else {
            return response.status(400).send({ error: 'wrong password!', user_data: user });
        }

    }   catch  (error)   {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;