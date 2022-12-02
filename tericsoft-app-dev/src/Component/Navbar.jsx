import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Employee Management system</h1>
        <Button variant="outlined" color='primary'><Link to="/add" className='link'>Add Employee</Link></Button>
    </div>
  )
}

export default Navbar