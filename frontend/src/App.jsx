import React from 'react';
import {Routes, Route} from 'react-router-dom';
// Using react axios to send HTTP requests

// Whenever making a new page ensure that you import them
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';


const App = () => {
  return (
    <Routes>
      {/* Utilise Route path='' element={} to create a new page */}
      {/* path, specifies which path it is going to */}
      {/* element, which page are we using based on this path */}
      {/* Similar to the routes we did in the server-side */}
      <Route path= '/' element={<Home/>} />
      <Route path= '/books/create' element={<CreateBooks/>} />
      <Route path= '/books/details/:id' element={<ShowBook/>} />
      <Route path= '/books/edit/:id' element={<EditBook/>} />
      <Route path= '/books/delete/:id' element={<DeleteBook/>} />
      
    </Routes>
  )
}

export default App