import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'

const ManageUser = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => {const ManageUser = data.filter((user) => user.role !== 'admin')
      setUsers(ManageUser)}
      )
  }, [])


  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const remaining = users.filter((user) => user._id !== id)
          setUsers(remaining)
        }
      })
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        {
          users.map((user) => (

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  {/* <Typography gutterBottom variant="h5" component="div">
                    {user.name}
                  </Typography> */}
                  <Typography variant="body2" color="text.secondary">
                    {user.email}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>

          ))
        }
        </Grid>
      </Box>

      
    </div>
  )
}

export default ManageUser
