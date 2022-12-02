import './App.css';
import Form from './Component/Form';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
// import Table from '@mui/material/Table';
import Home from './Pages/Home';
import {Routes,Route} from 'react-router-dom'
import EditEmployee from './Pages/EditEmployee';
import AddEmployee from './Pages/AddEmployee';
import Navbar from './Component/Navbar';
 

function App() {
  
  useEffect(() => {
    
  
    return () => {
      
    }
  }, [])
 
  return (
    <div className="App">
      
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddEmployee/>}/>
        <Route path='/edit/:id' element={<EditEmployee/>}/>
      </Routes>
    </div>
  );
}

export default App;
