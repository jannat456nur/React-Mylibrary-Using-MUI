import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import Header from '../shared/Header/Header'
import Footer from '../shared/Footer/Footer'
import './Feedback.css'
import SendIcon from '@mui/icons-material/Send'

const Feedback = () => {
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
                width: '100%',
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
