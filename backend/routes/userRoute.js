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
router.get('/login/:email', async (request, response) => {
    try {

        const { email } = request.params;

        const user = await User.find({ email });

        if (!user) {
            return response.status(404).send({ error: 'User not found!' });
        }

        const isValidPassword = request.body.password === user.password;

        if (isValidPassword) {
            return response.status(200).json({ message: 'account found!', user_data: user });
        } else {
            return response.status(400).send({ error: 'wrong password!', user: false });
        }

    }   catch  (error)   {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;