import React, {useState, useEffect} from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

// New Page that allows for editing of books
// Using 3 Separete states for them
const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pubYear, setPubYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    // Getting the ID from our link, then updating the book
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`)
        // If everything goes well, update the data
        .then((response) => {
            setAuthor(response.data.author);
            setPubYear(response.data.pubYear);
            setTitle(response.data.title);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            alert('Error happened. Check Console');
            console.log(error);
        })
    }, [])

    // Saving our book edit operation
    const handleEditBook = () => {
        const data = {
            title,
            author,
            pubYear,
        };
        setLoading(true);
        // Axios Sending a PUT to our database w/ our desired data for existing object
        axios
            .put(`http://localhost:5555/books/${id}`, data)
            // If successful then navigate back towards the home page
            .then( () => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('Error Happened, Check Console');
                console.log(error);
            });
    };

    return(
        
        <div className='p-4'>
            <BackButton/>
            <h1 className='text-3xl my-4'>Edit Book</h1>
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
                    <label className='text-xl mr-4 text-gray-500'> Publish Year </label>
                    {/* Input Box 
                        Type -> Type of Input
                        Value -> Value that this input to store in
                        onChange -> Once change is noted then utilize a state to store it*/}
                    <input 
                        type='text'
                        value={pubYear}
                        onChange={(e) => setPubYear(e.target.value)} 
                        className='border-2 border-gray-500 px-4 py-2 w-full'/>
                </div>
                {/* Button to save changes
                    onClick -> Once clicking this button, call handleSaveBook */}
                <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>Save</button>
            </div>
        </div>
    )
}

export default EditBook