import React, { useEffect, useState } from 'react';
// Using react axios to send HTTP requests
import axios from 'axios';
// Importing a component from components
import Spinner from '../components/Spinner';
// Importing Link
import { Link } from 'react-router-dom';
// Icon Edit
import { AiOutlineShoppingCart } from 'react-icons/ai'
// Info circle Icon
import { BsInfoCircle } from 'react-icons/bs'
// Add Icon and Delete Icon
import { MdOutlineAddBox, MdShoppingBasket } from 'react-icons/md'
// Home Button
import HomeButton from '../components/HomeButton';
import Logo from '../components/Logo';

// Book Home Page
const Book = () => {
    // Having 2 different states for our data (Books)
    // Ask friend about user states for React
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        // Calling the backend to the front end
        axios
            .get('http://localhost:5555/book/')
            .then((response) => {
                // Object of our response result
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='p-4'>
            <Logo/>
            <div className='flex justify-between items-center'>
                {/* Header that states Books List */}
                <h1 className='text-3xl my-8'> Books List</h1>
                {/* Links to the books create */}
                <Link to='/purchase/cart'>
                    <MdShoppingBasket className='text-sky-800 text-4xl' />
                </Link>
            </div>
            <div className='flex justify-between items-center'>
                <HomeButton/>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            
            {/* 
        Checks loading component 
        If true render the spinner component
        Else Have a Table:
            thead -> Columns?
            tbody -> rows
                td -> data for respective column
        */}
            {loading ? (
                <Spinner />
            ) : (
                <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>No</th>
                            <th className='border border-slate-600 rounded-md'>Title</th>
                            <th className='border border-slate-600 rounded-md'>Author</th>
                            <th className='border border-slate-600 rounded-md'>Genre</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Publisher</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>ISBN</th>
                            <th className='border border-slate-600 rounded-md'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id} className='h-8'>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {index + 1}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {book.title}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {book.author}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {book.genre}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {book.publishYear}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {book.publisher}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {book.ISBN}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/books/details/${book._id}`}>
                                            <BsInfoCircle className='text-2xl text-green-800' />
                                        </Link>
                                        <Link to={`/books/addcart/${book._id}`}>
                                            <AiOutlineShoppingCart className='text-2xl text-green-600' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Book;