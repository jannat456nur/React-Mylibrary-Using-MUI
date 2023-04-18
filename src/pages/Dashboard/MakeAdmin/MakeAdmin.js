import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'

const MakeAdmin = () => {
  const [email, setEmail] = useState('')
  const handleOnBlur = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }


  // make admin function here and pass it to the button onClick
  const handleOnSubmit = (e) => {
    const user = { email }
    fetch('https://amused-pleat-worm.cyclic.app/users', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
    alert('Successfully Added Admin')
    e.preventDefault()
  }

 
  return (
    <div>
      <form
        onSubmit={handleOnSubmit}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '80vh',
          border: '1px solid #ccc',
          borderRadius: '10px',
        }}
      >
        <TextField
          id="standard-basic"
          label="Enter Email Address"
          type="email"
          onBlur={handleOnBlur}
          variant="outlined"
          sx={{ width: '75%' }}
        />
        <Button
          color="success"
          sx={{ mt: 2 }}
          variant="contained"
          type="submit"
        >
          Make Admin
        </Button>
      </form>
    </div>
  )
}

export default MakeAdmin
