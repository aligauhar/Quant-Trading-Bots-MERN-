import React, { useContext } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import About from './Pages/Home/About';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {

  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Toaster/>
      </Router>
      </div>
  )
}

export default App
