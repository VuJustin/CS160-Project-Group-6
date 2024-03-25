import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Book from "./pages/Book";
import CreateBooks from "./pages/CreateBooks";

const App = () => {
  return(
    //<div className='bg-red-400 text-white' >App</div>
  
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/user/signup' element={<Signup/>} />
      <Route path='/' element={<Login />} />
      <Route path='/books' element={<Book />} />
      <Route path='/books/create' element={<CreateBooks/>} />
    </Routes>
  )
}

export default App