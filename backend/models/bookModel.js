import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
   { 
        title:{
        type: String,
        required: true,
        },
        author:{
            type: String,
            required: true,
        },
        genre:{
            type: String,
            required: true
        },
        publishYear:{
            type:Number,
            required: true,
        },
        publisher:{
            type:String,
            required: true
        },
        ISBN:{
            type:Number,
            required:true,
            unique: true,
        },
        description:{
            type:String,
            required:true,
        }
        
    }
);

export const Book = mongoose.model('Book', bookSchema);