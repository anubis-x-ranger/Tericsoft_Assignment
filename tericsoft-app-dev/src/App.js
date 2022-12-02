import './App.css';
import Form from './Component/Form';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { Button, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Table from '@mui/material/Table';


function App() {
  const [open, setOpen] = useState(false);
  
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    
  
    return () => {
      
    }
  }, [])
 
  return (
    <div className="App">
      <h1>Employee Management system</h1>
      <Button variant="contained" color='primary' onClick={handleOpen}>
        Add Employee
      </Button>
    
      <Modal open={open} onClose={handleClose}>
        <Form/>
      </Modal>
      
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
          </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
      </Table>

    </div>
  );
}

export default App;
