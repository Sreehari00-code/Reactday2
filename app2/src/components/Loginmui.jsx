import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
const Loginmui = () => {
  return (
    <div>
        <Typography variant='h1'>welcome to html</Typography>
      <TextField variant='outlined' label="Name"/><br />
      <TextField variant='filled' label="Name"/><br />
      <TextField variant='standard' label="Name"/><br /><br />
<Button variant='text'>submit </Button>
<Button variant='contained'>submit </Button>
<Button variant='outlined'>submit </Button>

    </div>
  )
}

export default Loginmui
