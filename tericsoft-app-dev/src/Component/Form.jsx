import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import { Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Input, InputLabel, List, ListItem, Radio, RadioGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Form = () => {

  const [employee,setEmployee]= useState({
    id:'',
    name: '',
    email: '',
    phone:'',
    dob: '',
    gender: "",
    hobbies: [
      ""
    ]
});
const [checkHobbies, setCheckHobbies] = useState({
  singing:false,
  dancing:false,
  reading:false,
  others:false
})
const navigate=useNavigate();
const {name,email,phone,dob,gender,hobbies}=employee;

const onValueChange=(e)=>{
  setEmployee({...employee,[e.target.name]:e.target.value})
}

const updateHobbies=()=>{
  
  for(const key in checkHobbies){
    if(key==true){
      hobbies.push(key);
      setEmployee({...employee,[hobbies]:hobbies})
    }
  }
}
const addEmployee=()=>{
 
  axios.post(`http://localhost:8080/employee`, employee)
  .then(()=>{
    navigate('/')
  })
}

const handleChange=(e)=>{
  // console.log(e.target.checked)
  // console.log(checkHobbies)
  setCheckHobbies({...checkHobbies,[e.target.name]:e.target.checked});
  updateHobbies();
  }

const handleCancel=()=>{
  navigate('/')
}

  return (
    <div className='modal-styles'>
      <h1>Fill Employee Details</h1>
      <div>
      <List>
        <ListItem>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter Your Name" name="name" value={name} type="text" onChange={(e) => onValueChange(e)} /> 
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Enter Your Email" name="email" value={email} type="email" onChange={(e) => onValueChange(e)} /> 
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input placeholder="Enter Your Phone" name="phone" value={phone} type="text" onChange={(e) => onValueChange(e)} /> 
          </FormControl>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <FormControl>
            <FormLabel>Date of Birth</FormLabel>
            <Input name="dob" value={dob} type="date" onChange={(e) => onValueChange(e)} /> 
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup name="gender" value={gender} onChange={(e) => onValueChange(e)} row>
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Others" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl>
            <FormGroup row>
              <FormControlLabel control={<Checkbox checked={checkHobbies.singing} value="Singing" onChange={(e)=>handleChange(e)} name="singing" />} label="Singing" />
              <FormControlLabel  control={<Checkbox checked={checkHobbies.dancing} value="Dancing" onChange={(e)=>handleChange(e)} name="dancing"/>} label="Dancing" />
              <FormControlLabel control={<Checkbox checked={checkHobbies.reading} value="Reading" onChange={(e)=>handleChange(e)} name="reading"/>} label="Reading" />
              <FormControlLabel  control={<Checkbox checked={checkHobbies.others} value="Others" onChange={(e)=>handleChange(e)} name="others"/>} label="Others" />
            </FormGroup>
          </FormControl> 
        </ListItem> 
      </List>
      </div>
      <div>
      <Button variant='contained' color='success' onClick={()=>addEmployee()}>Submit</Button>
      <Button variant='contained' color='error' display="inline" onClick={()=>handleCancel()}>Cancel</Button>
      </div>
    </div>
  )
}

export default Form