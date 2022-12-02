import React from 'react'
import { Button, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Table from '@mui/material/Table';

const ShowEmployees = () => {
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
            {/* <EmployeeRows employees={employees}/> */}
        </TableBody>
    </Table>
</div>
  )
}

export default ShowEmployees