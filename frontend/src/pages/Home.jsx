import React from 'react'
import {redirect, useNavigate} from "react-router-dom";
import logo from '../assets/das.png'; // Tell webpack this JS file uses this image
function Home() {
    // Import result is the URL of your image
    const navigate = useNavigate();
    return (
        <div align="center">
            <img src={logo} alt="Logo" width={1000} height={1000}/>
            <p>You are now logged in.</p>
            <p>Welcome to Digital Archive Six! This is the home page.</p>
            <button className='p-2 bg-sky-300 m-8' onClick={() => {navigate('/'); localStorage.clear();}}>Logout</button>
        </div>
    );
}

export default Home;