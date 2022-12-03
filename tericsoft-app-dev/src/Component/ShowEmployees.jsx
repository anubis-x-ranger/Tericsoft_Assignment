import React, { useEffect, useState } from 'react'
import { Button, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Table from '@mui/material/Table';
import axios from 'axios'
import EmployeeRows from './EmployeeRows';
const ShowEmployees = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
      
       getEmployees(); 
      return () => {
        
      }
    }, [])
    
    const getEmployees=()=>{
       axios.get(`http://localhost:8080/employee`)
        .then((response)=>{
            setEmployees(response.data);
        })
    }
  return (
    <div>
    <Table>
        <TableHead>
        <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Hobbies</TableCell>
            <TableCell>Actions</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
            <EmployeeRows employees={employees} getEmployees={getEmployees}/>
        </TableBody>
    </Table>
</div>
  )
}

export default ShowEmployees