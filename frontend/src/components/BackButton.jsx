// This component allows to go back to pages
import {Link} from 'react-router-dom';
// Icon BS Arrow Left
import { BsArrowLeft } from 'react-icons/bs';

// Destination means which page this button will go to
// Set to home
// Link will link it towards a page
const BackButton = ({destination='/'}) => {
    return(
        <div className='flex'>
            <Link
            to ={destination}
            className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
                {/* Using icon of backarrow within this Link (Back Arrow Icon Linked to Homepage) */}
                <BsArrowLeft className='text-2xl'/>
            </Link>
        </div>
    )
}

export default BackButton