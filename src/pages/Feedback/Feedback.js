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

  const {user} = useContext(AuthContext)
  const initialInfo = {userName: user.name, userText: user.text}
  const [info, setInfo] = useState(initialInfo)



  //collect data from user
  const handleOnBlur = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newInfo = {...info, [field]: value}
    console.log(newInfo)
    setInfo(newInfo)
  }

//send data to server
fetch("http://localhost:5000/feedback", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(info),
})
.then((res) => res.json())
.then((data) => {

  if (data.insertedId) {
    alert("Your review has been added successfully")
  }
})



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
                width: { xs: "83%", sm: "90%", md: "90%", lg: "100%" },
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
                <TextField
                  id=" Your Name*"
                  label=" Your Name*"
                  multiline
                  maxRows={4}
                  placeholder="Your Name"
                  name= 'name'
                  onBlur={handleOnBlur}
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
                  name='text'
                  onBlur={handleOnBlur}
                  multiline
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
