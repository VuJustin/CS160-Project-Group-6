import React, {useState} from "react";
import { Link } from "react-router-dom";
// Axios to utilize the get command
import axios from "axios";
// Navigation to other pages
import { useNavigate } from "react-router-dom";

const Login = () => {
    // Saving the data for utlize for get method
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Navigation towards other pages
    const navigate = useNavigate();
    // Operation to perform login check
    const handleSubmit = () =>{
        // Prevents a form from submtting
        // For chance to validate input before submitting to server
        //e.preventDefault();
        // Storing data in json form
        console.log(email);
        console.log(password);
        const data = 
        {
            email,
            password
        };
        // Calling the Login get function from backend
        axios.post("http://localhost:5555/user/login", data)
        // Try and Catch Block
            .then(result => {
                console.log(result);
                if(result.status === 200){
                    navigate("/home");
                } 
            })
            .catch((error) => {
                alert('Error Occured: ' + error.response.data.error);
                console.log(error);
            })
    };


    return(
        // <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        //     <div className ="bg-white p3 rounded w-25"> 
        //         <label className='text-xl mr-4'> <strong> Login </strong></label>
        //         <form onSubmit={handleSubmit}> 
        //             <div className="mb-3">
        //                 <label className = "text-xl mr-4 text-gray-500"> <strong> Email </strong> </label>
        //                 <input 
        //                 type = 'text'
        //                 placeholder = 'Email Here'
        //                 autoComplete="off"
        //                 value = {email}
        //                 onChange={(e) => setEmail(e.target.value)}
        //                 className = 'border-2 border-gray-500 px-4 py-2 w-full'
        //             />
        //             </div>
                    
        //             <div className="mb-3">
        //                 <label className = "text-xl mr-4 text-gray-500"> <strong> Password </strong> </label>
        //                 <input 
        //                     type = 'text'
        //                     placeholder = 'Password Here'
        //                     autocComplete = "off"
        //                     value = {password}
        //                     onChange={(e) => setPassword(e.target.value)}
        //                     className = 'border-2 border-gray-500 px-4 py-2 w-full'
        //                 />
        //             </div>
                    
        //             <button type = "submit" className = "btn btn-success w-100 rounded-0">
        //                 Login
        //             </button>
                
        //         </form>

        //         <label className = "text-xl mr-4 text-gray-500">Don't Have an Account?</label>
        //         <Link to="/user/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        //             Sign-Up
        //         </Link>
        //     </div>
        // </div>

        <div className='p-4'>
            <h1 className='text-3xl my-4'> <strong> Login </strong> </h1>
            <div className ='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className = 'my-4'>
                    <label className='text-xl mr-4 text-gray-500'> Email </label>
                    <input 
                        type='text'
                        placeholder = 'Email Here'
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>

                <div className = 'my-4'>
                    <label className='text-xl mr-4 text-gray-500'> Password </label>
                    <input 
                        type='password'
                        placeholder = 'Password Here'
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>

                <button className='p-2 bg-sky-300 m-8' onClick={handleSubmit}>Login</button>

            </div>

            <div className ='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
            <label className = "text-xl mr-4 text-gray-500">Don't Have an Account?</label>
                <Link to="/user/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                     Sign-Up
                 </Link>
            </div>

        </div>
    )
}

export default Login