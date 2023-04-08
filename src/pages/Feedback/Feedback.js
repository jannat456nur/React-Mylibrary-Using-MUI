import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import React, { useContext, useState } from 'react'
import Header from '../shared/Header/Header'
import Footer from '../shared/Footer/Footer'
import './Feedback.css'
import SendIcon from '@mui/icons-material/Send'
import { AuthContext } from '../../context/AuthProvider/AuthProvider'

const Feedback = () => {
  const { user } = useContext(AuthContext)
  // const initialInfo = { userName: user.name, userText: user.text }
  // const [info, setInfo] = useState(initialInfo)

  const handleSubmit = (e) => {
    // const form = new FormData(e.target)

    // const newInfo = { ...info }
    // for (let field of form) {
    //   newInfo[field[0]] = field[1]
    // }
    // setInfo(newInfo)
    // console.log(newInfo)
    // const form = new FormData(e.currentTarget)
    // const data = {
    //   username: form.get('userName'),
    //   description: form.get('description'),
    // }
    // console.log(data)


    const userData = {
      userName: user.name,
      description: user.description,
    
    }
    //send data to server
    fetch('http://localhost:5000/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
      // console.log(userData)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Your review has been added successfully')
        }
      })
    e.preventDefault()
  }

  return (
    <>
      <Header />

      <Box sx={{ flexGrow: 1, boxShadow: 5 }} data-aos="fade-up">
        <Grid
          container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Card
              sx={{
                minWidth: 275,
                width: { xs: '83%', sm: '90%', md: '90%', lg: '100%' },
                margin: 2,
                padding: 2,
                height: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CardContent>
                <Chip
                  label="Leave Your Review"
                  variant="outlined"
                  sx={{
                    fontSize: '1.3rem',
                    color: '#fff',
                    background: 'rgb(211, 61, 211)',
                  }}
                />
                <form onSubmit={handleSubmit}>
                  <TextField
                    id=" Your Name*"
                    label=" Your Name*"
                    multiline
                    required
                    autoFocus
                    maxRows={4}
                    placeholder="Your Name"
                    name="userName"
                    // onBlur={handleOnBlur}
                    sx={{
                      width: '100%',
                      margin: 1,
                      marginLeft: 0,
                      marginTop: 5,
                    }}
                  />
                  <TextField
                    id=" Review from heart*"
                    label="Review from heart*"
                    name="description"
                    // onBlur={handleOnBlur}
                    multiline
                    required
                    autoFocus
                    rows={4}
                    placeholder=" Review from heart*"
                    sx={{ width: '100%', margin: 1, marginLeft: 0 }}
                  />

                  <button className="reviewButton" size="small" sx={{}}>
                    Submit
                    <SendIcon
                      sx={{
                        marginLeft: 1,
                        fontSize: 15,
                        color: 'white',
                      }}
                    />
                  </button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  )
}

export default Feedback
