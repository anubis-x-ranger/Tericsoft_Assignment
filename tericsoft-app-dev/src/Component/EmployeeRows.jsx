import { Button, ButtonGroup, TableCell, TableRow } from '@mui/material'
import React from 'react'

const EmployeeRows = ({employees}) => {
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
                <TableCell>{employee.hobbies}</TableCell>
                <TableCell>
                    <ButtonGroup>
                    <Button>Edit</Button><Button>Delete</Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
        ))}
        
    </>
  )
}

export default EmployeeRows