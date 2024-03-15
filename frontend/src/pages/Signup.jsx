import React, { useState } from "react";
import { Link } from "react-router-dom";
// Axios to utilize the get command
import axios from "axios";
// Navigation to other pages
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [name, setName] = useState(''); //initalize the value with useState
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log(name);
        console.log(email);
        console.log(password);
        const newUser = { name, email, password };

        axios.post("http://localhost:5555/user/signup", newUser)
            .then(result => {
                console.log(result);
                if (result.status === 201) {
                    navigate("/");
                }
            })
            .catch((error) => {
                alert('Error Occured: ' + error);
                console.log(error);
            })
           
    };

    return(
        <div className='p-4'>
            <h1 className='text-3xl my-4'> <strong> SignUp </strong> </h1>
            <div className ='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
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
                        placeholder = 'Email'
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>

                <div className = 'my-4'>
                    <label className='text-xl mr-4 text-gray-500'> Password </label>
                    <input 
                        type='text'
                        placeholder = 'Password'
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>

                <button className='p-2 bg-sky-300 m-8' onClick={handleSubmit}>Signup</button>

            </div>

        </div>
    )
}

export default Signup