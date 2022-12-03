import { Modal } from '@mui/material';
import React from 'react'
import Form from '../Component/Form';

const AddEmployee = () => {
    
  return (
    <div>    
      <Modal open={true}>
        <Form/>
      </Modal>
    </div>
  )
}

export default AddEmployee