import { Modal } from '@mui/material'
import React from 'react'
import Form from '../Component/Form'

const EditEmployee = () => {
  return (
    <div>
      <Modal open={true}>
        <Form/>
      </Modal>
    </div>
  )
}

export default EditEmployee