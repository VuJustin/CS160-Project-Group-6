import React, { useState } from "react";
import { Link } from "react-router-dom";
// Axios to utilize the get command
import axios from "axios";
// Navigation to other pages
import { useNavigate } from "react-router-dom";
import logo from "../assets/das.png";


const Signup = () => {
    const [name, setName] = useState(''); //initalize the value with useState
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(confirmPassword);
        const newUser = { name, email, password };
        if(password===confirmPassword) {
            axios.post("http://localhost:5555/user/signup", newUser)
                .then(result => {
                    console.log(result);
                    if (result.status === 201) {
                        navigate("/");
                    }
                })
                .catch((error) => {
                    alert('Error Occured: ' + error.response.data.error); //display error message
                    console.log(error);
                })

        }
        else {
            alert('Passwords do not match!');
        }

    };

    return(
        <div className='p-4'>
            <div align="center">
                <img src={logo} alt="Logo" width={1000} height={1000}/>
            </div>
            <h1 className='text-3xl my-4' align="center"><strong> Sign Up </strong></h1>
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'> Name </label>
                    <input
                        type='text'
                        placeholder='Name'
                        autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'> Email </label>
                    <input
                        type='text'
                        placeholder='Email'
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>

                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'> Password </label>
                    <input
                        type='password'
                        placeholder='Password'
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'> Confirm Password </label>
                    <input
                        type='password'
                        placeholder='Password'
                        autoComplete="off"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>

                <button className='p-2 bg-sky-300 m-8' onClick={handleSubmit}>Sign up</button>

            </div>

        </div>
    )
}

export default Signup