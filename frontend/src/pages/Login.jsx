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
    const handleSubmit = (e) =>{
        // Prevents a form from submtting
        // For chance to validate input before submitting to server
        e.preventDefault();
        // Storing data in json form
        const data = 
        {
            email,
            password
        }
        // Calling the Login get function from backend
        axios
        //Actual backend HTTP call
            .get("http://localhost:5555/user/login", data)
        // Try and Catch Block
            .then(result => {
                console.log(result);
                if(result.data === "Login Successful"){
                    navigate("/home");
                } else{
                    navigate("/user/signup")
                    alert('Not Registered with us');
                }
            })
            .catch((error) => {
                alert('Error Occured, Check console');
                console.log(error);
            })
    };


    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className ="bg-white p3 rounded w-25"> 
                <label className='text-xl mr-4'> <strong> Login </strong></label>
                <form onSubmit={handleSubmit}> 
                    <div className="mb-3">
                        <label className = "text-xl mr-4 text-gray-500"> <strong> Email </strong> </label>
                    </div>

                    <input 
                        type = 'text'
                        placeholder = 'Email Here'
                        autoComplete="off"
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                        className = 'border-2 border-gray-500 px-4 py-2 w-full'
                    />

                
                </form>
            </div>
        </div>
    )
}

export default Login