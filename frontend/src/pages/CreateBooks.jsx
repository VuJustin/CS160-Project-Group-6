import React, {useState} from 'react';
import HomeButton from '../components/HomeButton';
import BookButton from '../components/BookButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

// New Page that allows for creation of books
// Using 3 Separete states for them
const CreateBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [publisher, setPublisher] = useState('');
    const [ISBN, setISBN] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    // Saving our book create operation
    const handleSaveBook = () => {
        const data = {
            title,
            author,
            genre,
            publishYear,
            publisher,
            ISBN,
            description
        };
        setLoading(true);
        // Axios Sending a Post to our database w/ our desired data
        axios
            .post('http://localhost:5555/book/create', data)
            // If successful then navigate back towwards the home page
            .then( () => {
                setLoading(false);
                navigate('/books');
            })
            .catch((error) => {
                setLoading(false);
                alert('Error Happened, Check Console');
                console.log(error);
            });
    };

    return(
        
        <div className='p-4'>
            <Logo />           
           
           <div className="flex space-around">
            <HomeButton />
            <BookButton />
            </div>

            <h1 className='text-3xl my-4'>Create Book</h1>
            
           
            {/* If Loading is true show spinner or show empty string*/}
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className= 'my-4'>
                    {/* Label */}
                    <label className='text-xl mr-4 text-gray-500'> Title </label>
                    {/* Input Box 
                        Type -> Type of Input
                        Value -> Value that this input to store in
                        onChange -> Once change is noted then utilize a state to store it*/}
                    <input 
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} 
                        className='border-2 border-gray-500 px-4 py-2 w-full'/>
                </div>
                <div className= 'my-4'>
                    {/* Label */}
                    <label className='text-xl mr-4 text-gray-500'> Author </label>
                    {/* Input Box 
                        Type -> Type of Input
                        Value -> Value that this input to store in
                        onChange -> Once change is noted then utilize a state to store it*/}
                    <input 
                        type='text'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)} 
                        className='border-2 border-gray-500 px-4 py-2 w-full'/>
                </div>
                <div className= 'my-4'>
                    {/* Label */}
                    <label className='text-xl mr-4 text-gray-500'> Genre </label>
                    {/* Input Box 
                        Type -> Type of Input
                        Value -> Value that this input to store in
                        onChange -> Once change is noted then utilize a state to store it*/}
                    <input 
                        type='text'
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)} 
                        className='border-2 border-gray-500 px-4 py-2 w-full'/>
                </div>
                <div className= 'my-4'>
                    {/* Label */}
                    <label className='text-xl mr-4 text-gray-500'> Publish Year </label>
                    {/* Input Box 
                        Type -> Type of Input
                        Value -> Value that this input to store in
                        onChange -> Once change is noted then utilize a state to store it*/}
                    <input 
                        type='text'
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)} 
                        className='border-2 border-gray-500 px-4 py-2 w-full'/>
                </div>
                <div className= 'my-4'>
                    {/* Label */}
                    <label className='text-xl mr-4 text-gray-500'> Publisher </label>
                    {/* Input Box 
                        Type -> Type of Input
                        Value -> Value that this input to store in
                        onChange -> Once change is noted then utilize a state to store it*/}
                    <input 
                        type='text'
                        value={publisher}
                        onChange={(e) => setPublisher(e.target.value)} 
                        className='border-2 border-gray-500 px-4 py-2 w-full'/>
                </div>
                <div className= 'my-4'>
                    {/* Label */}
                    <label className='text-xl mr-4 text-gray-500'> ISBN </label>
                    {/* Input Box 
                        Type -> Type of Input
                        Value -> Value that this input to store in
                        onChange -> Once change is noted then utilize a state to store it*/}
                    <input 
                        type='text'
                        value={ISBN}
                        onChange={(e) => setISBN(e.target.value)} 
                        className='border-2 border-gray-500 px-4 py-2 w-full'/>
                </div>
                <div className= 'my-4'>
                    {/* Label */}
                    <label className='text-xl mr-4 text-gray-500'> Description </label>
                    {/* Input Box 
                        Type -> Type of Input
                        Value -> Value that this input to store in
                        onChange -> Once change is noted then utilize a state to store it*/}
                    <input 
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} 
                        className='border-2 border-gray-500 px-4 py-2 w-full'/>
                </div>
                {/* Button to save changes
                    onClick -> Once clicking this button, call handleSaveBook */}
                <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>Save</button>
            </div>
        </div>
    )
}

export default CreateBooks