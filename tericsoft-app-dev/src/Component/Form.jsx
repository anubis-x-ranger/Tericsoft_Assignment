import React from 'react'
import FormControl from '@mui/material/FormControl';
import { Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Input, InputLabel, List, ListItem, Radio, RadioGroup } from '@mui/material';

const Form = () => {
  return (
    <div className='modal-styles'>
      <h1>Fill Employee Details</h1>
      <div>
      <List>
        <ListItem>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter Your Name" type="text" onfocus="focused"/> 
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Enter Your Email" type="email" onfocus="focused"/> 
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input placeholder="Enter Your Phone" type="text" onfocus="focused"/> 
          </FormControl>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input placeholder="Date" type="date" onfocus="focused"/> 
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup name="gender" row>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl>
            <FormGroup row>
              <FormControlLabel control={<Checkbox />} label="Singing" />
              <FormControlLabel  control={<Checkbox />} label="Dancing" />
              <FormControlLabel control={<Checkbox />} label="Reading" />
              <FormControlLabel  control={<Checkbox />} label="Others" />
            </FormGroup>
          </FormControl> 
        </ListItem> 
      </List>
      </div>
      <div>
      <Button variant='contained' color='success'>Submit</Button>
      <Button variant='contained' color='error' display="inline">Cancel</Button>
      </div>
    </div>
  )
}

export default Form