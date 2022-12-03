import { Button, ButtonGroup, TableCell, TableRow } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
const EmployeeRows = ({employees,getEmployees}) => {
  
  const deleteEmployee=(id)=>{
    axios.delete(`http://localhost:8080/employee/${id}`)
    .then(()=>{getEmployees()});
  }

  return (
    <>
        {employees.map((employee,id)=>(
            <TableRow key={id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.phone}</TableCell>
                <TableCell>{employee.dob}</TableCell>
                <TableCell>{employee.gender}</TableCell>
                <TableCell>{employee.hobbies.map((hobby,id)=>(
                  <li key={id} className='list-item'>{hobby}</li>
                ))}</TableCell>
                <TableCell>
                    <ButtonGroup>
                      <Button component={Link} to={`/edit/${employee.id}`}>Edit</Button>
                      <Button color='error' onClick={()=>deleteEmployee(employee.id)}>Delete</Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
        ))}
        
    </>
  )
}

export default EmployeeRows