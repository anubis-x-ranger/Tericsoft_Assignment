import { Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FormControl from '@mui/material/FormControl';
import { Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Input, InputLabel, List, ListItem, Radio, RadioGroup } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = () => {
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

  const {name,email,phone,dob,gender,hobbies}=employee;

  const {id}=useParams();

  const navigate=useNavigate();

  useEffect(() => {
    loadEmployeeDetails();
  }, []);

  const loadEmployeeDetails=()=>{
    axios.get(`http://localhost:8080/employee/${id}`)
    .then((res)=>setEmployee(res.data))
  }

  const onValueChange=(e)=>{
    setEmployee({...employee,[e.target.name]:e.target.value})
  }

  const handleSubmit=()=>{
    axios.put(`http://localhost:8080/employee/${id}`,employee)
    .then(()=>{
      navigate('/')
    })
  }
  const handleCancel=()=>{
    navigate('/')
  }

  return (
    <div>
      <Modal open={true}>
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
                <FormControlLabel control={<Checkbox />} label="Singing"  />
                <FormControlLabel  control={<Checkbox />} label="Dancing" />
                <FormControlLabel control={<Checkbox />} label="Reading" />
                <FormControlLabel  control={<Checkbox />} label="Others" />
              </FormGroup>
            </FormControl> 
          </ListItem> 
        </List>
        </div>
        <div>
        <Button variant='contained' color='success' onClick={()=>handleSubmit()}>Submit</Button>
        <Button variant='contained' color='error' display="inline" onClick={()=>handleCancel()}>Cancel</Button>
        </div>
      </div>
      </Modal>
    </div>
  )
}

export default EditEmployee