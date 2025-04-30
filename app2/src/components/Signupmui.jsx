import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import '../App.css'
const Signupmui = () => {
  return (
    <div className='boxx'>
          <Typography variant='h1'>welcome to Html</Typography>
      <TextField variant='outlined' label="Name"/><br />
      <TextField variant='filled' label="Name"/><br />
      <TextField variant='standard' label="Name"/><br /><br />
<Button variant='text'>submit </Button>
<Button variant='contained'>submit </Button>
<Button variant='outlined'>submit </Button>
      
    </div>
  )
}

export default Signupmui
