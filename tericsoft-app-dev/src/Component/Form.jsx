import React from 'react'
import FormControl from '@mui/material/FormControl';
import { Input } from '@mui/material';

const Form = () => {
  return (
    <div className='modal-styles'>
        {/* name, email, phone : input box
            dob : date picker
            gender: radio button
            hobbies : checkboxes
        */}


        <FormControl>
            <Input defaultValue="Name" type="text" onfocus="focused"/>
            <Input defaultValue="Email" type='email' onfocus="focused"/>
            <Input defaultValue="Phone" type='text' onfocus="focused"/>
            <Input defaultValue="Date" type='date' onfocus="focused"/> 
        </FormControl>
    </div>
  )
}

export default Form