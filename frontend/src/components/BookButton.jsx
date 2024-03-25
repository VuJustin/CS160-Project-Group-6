// This component allows to go back to pages
import {Link} from 'react-router-dom';
// Icon BS Arrow Left
import { AiFillBook } from 'react-icons/ai';

// Destination means which page this button will go to
// Set to home
// Link will link it towards a page
const BookButton = ({destination='/books'}) => {
    return(
        <div className='flex'>
            <Link
            to ={destination}
            className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
                <AiFillBook className='text-2xl'/>
            </Link>
        </div>
    )
}

export default BookButton