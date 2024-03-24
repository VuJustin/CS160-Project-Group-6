import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

router.post('/create',async (request, response) => {
    try{
        // If any of the required fields in book is not present
        if(!request.body.title || 
           !request.body.author || 
           !request.body.publishYear ||
           !request.body.publisher ||
           !request.body.ISBN ||
           !request.body.genre ||
           !request.body.description)
           {
            // Send out a reponse to ensure all fields are sent
            response.status(400).send({ message: "Send all required fields"});
           }
        // After ensuring all fields req. are filled in, create a new book variable
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
            publisher: request.body.publisher,
            ISBN: request.body.ISBN,
            genre: request.body.genre,
            description: request.body.description
        };
        // After creaing this newBook variable, create a book w/ newBook values
        const book = await Book.create(newBook);
        // Return a response of creating the book
        return response.status(201).send(book);
    } catch (error){
        // Log Error to console
        console.log(error);
        // Send out a response w/ error message
        response.status(500).send({ message: error.message});
    }
});

// Route to get all books from database, get Method
// To test this, go to postman, change to GET, then paste in same link
router.get('/', async (request, response) => {
    // Try to search for all books from database, if failing, send out error message
    try{
        // Book.find - finds a specific book
        // {} within Book.find denotes that we should find all books
        // Afterwards, save this within the books variable
        const books = await Book.find({});
        // After saving the books, return a reponse that contains all the books
        // Just putting the books itself sends out an array of the books data 
        // return response.status(200).json(books);
        // returning all sets of books w/ showing total books length, and data
        return response.status(200).json({
            length: books.length,
            data: books
        });
    } catch (error){
        console.log(error);
        response.status(500).send({message:error.message});
    }

});

// Route to get one book from database via id, get method
// : represents how to represent parameters
// Test this on post man, GET -> Same Link
// POSTMan URL testing: http://localhost:5555/books/(id from book)
router.get('/:id', async (request, response) => {
    // Try to search for one book id from database, if failing, send out error message
    try{
        // ID finds the specific id from the /:id
        const {id} = request.params;
        // Book.findById - finds a specific book by id
        // Afterwards, save this within the books variable
        const book = await Book.findById(id);
        // After saving the books, return a reponse that contains the book based on id
        return response.status(200).json(book);
    } catch (error){
        console.log(error);
        response.status(500).send({message:error.message});
    }

});

// Route to update one book from database, put method
// Requires request .params (New Data) and request .body
router.put('/:id', async (request, response) => {
    try{
        // Checks if request has all required info, if not send out response that we need all data
        if(!request.body.title || 
            !request.body.author || 
            !request.body.publishYear ||
            !request.body.publisher ||
            !request.body.ISBN ||
            !request.body.genre ||
            !request.body.description){
            response.status(400).send({ message: "Send all req. fields: title, author, pubYear"});
            }
        // Grabs the book id we want to update
        const {id} = request.params;
        // Updates the book via findByIdAndUpdate
        // 1st Parameter id to find the book we want to update
        // 2nd Paramter is updating the book w/ the new request data
        const result = await Book.findByIdAndUpdate(id, request.body);
        // If the result is empty, then return a message that the book was not found
        if(!result) {
            return response.status(404).json({message: 'Book not found'})
        }
        else{
            return response.status(200).send({message: 'Book is updated successfully'})
        }
    } catch (error){
        console.log(error);
        response.status(500).send({message:error.message});
    }
});

// Route for deleting a book
// Requires the id only
router.delete('/:id', async(request, response) => {
    try{
        // Grabs the book id we want to delete
        const {id} = request.params;
        // Deletes the book using its id
        const result = await Book.findByIdAndDelete(id);
        // If result is false, then state book is not found
        if(!result){
            return response.status(404).json({message: 'Book does not exist'})
        } else{
            return response.status(200).send({message: 'Book successfully deleted'})
        }
    } catch (error){
        console.log(error);
        response.status(500).send({message:error.message})
    }
});

export default router;