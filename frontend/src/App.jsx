import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const App = () => {
  return(
    //<div className='bg-red-400 text-white' >App</div>
  
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user/signup' element={<Signup/>} />
      <Route path='/user/login' element={<Login/>} />
    </Routes>
  )
}

export default App