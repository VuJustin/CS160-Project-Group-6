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
        <div>This is the Login Page</div>
    )
}

export default Login