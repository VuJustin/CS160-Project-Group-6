// This is for creating a data model to store within mongodb
import mongoose from "mongoose";

// Creating the book schema to store within MongoDB
// When creating a schema, don't need to have a unique id, mongoDB takes care of this
const bookSchema = mongoose.Schema(
    {
        // Title of Book
        title:{
            // Data Type is String
            type: String,
            // This is required for the data
            required: true
        },
        author:{
            type: String,
            required: true
        },
        pubYear:{
            type: Number,
            required: true
        }
    },
    // Creating a TimeStamps object that keeps track of time data created
    {
        timestamps: true
    }
);

// Adding a new model within MongoDB
export const Book = mongoose.model('books', bookSchema)