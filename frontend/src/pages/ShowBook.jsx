import React, {useEffect, useState} from 'react';
// Sending HTTP Requests
import axios from 'axios';
// Utilizing Paramters from HTTP Requests
import { useParams } from 'react-router-dom';
// Back Button Component to go back to the homepage
import BookButton from '../components/BookButton';
import HomeButton from '../components/HomeButton';
import Spinner from '../components/Spinner';
import Logo from '../components/Logo';
import Book from './Book';

// New Page that allows for showing all books
const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);

    // Getting ID from Use Params
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        // Grabbing the id from link
        axios
            .get(`http://localhost:5555/book/${id}`)
            // If resposne is caught
            .then((response) => {
                setBook(response.data);
                setLoading(false);
            })
            // If error occurs
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [])

    return(
        <div className='p-4'>
            <Logo/>
            <div className="flex space-around">
            <HomeButton />
            <BookButton />
            </div>
            
            <h1 className='text-3xl my-4'>{book.title}</h1>
           
            { loading ? (
                // If Loading true show spinner
                <Spinner />
            ): ( // If Loading is false, show books
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                    <div className='my-4'> 
                        <span className='text-xl mr-4 text-gray-500'>Author</span>
                        <span>{book.author}</span>
                    </div>
                    <div className='my-4'> 
                        <span className='text-xl mr-4 text-gray-500'>Genre</span>
                        <span>{book.genre}</span>
                    </div>
                    <div className='my-4'> 
                        <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
                        <span>{book.publishYear}</span>
                    </div>
                    <div className='my-4'> 
                        <span className='text-xl mr-4 text-gray-500'>Publisher</span>
                        <span>{book.publisher}</span>
                    </div>
                    <div className='my-4'> 
                        <span className='text-xl mr-4 text-gray-500'>ISBN</span>
                        <span>{book.ISBN}</span>
                    </div>
                    <div className='my-4'> 
                        <span className='text-xl mr-4 text-gray-500'>Description</span>
                        <span>{book.description}</span>
                    </div>
                </div>

            )}
        </div>
    )
}

export default ShowBook