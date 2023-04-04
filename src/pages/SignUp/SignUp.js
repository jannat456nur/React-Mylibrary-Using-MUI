import React from 'react'
import Header from '../shared/Header/Header'
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import Footer from '../shared/Footer/Footer'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead'
import './SignUp.css'

const SignUp = () => {
  return (
    <div>
      {' '}
      <>
        <Header />{' '}
        <Box sx={{ flexGrow: 1 }} data-aos="fade-up">
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
                  border: '1px solid',
                  margin: 2,
                  padding: 2,
                  height: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CardContent>
                  <MarkEmailReadIcon
                    sx={{
                      fontSize: 30,
                      borderRadius: '50%',
                      backgroundColor: 'green',
                      color: 'white',
                      padding: 1,
                    }}
                  ></MarkEmailReadIcon>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ marginTop: 3 }}
                  >
                    Sign Up
                  </Typography>

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
                    }}
                  />
                  <TextField
                    id=" Email address*"
                    label=" Email address*"
                    multiline
                    maxRows={4}
                    placeholder="Enter Your Email"
                    sx={{
                      width: '100%',
                      margin: 1,
                      marginLeft: 0,
                    }}
                  />
                  <TextField
                    id="Password*"
                    label="Password*"
                    multiline
                    maxRows={4}
                    placeholder="Enter Password"
                    sx={{
                      width: '100%',
                      margin: 1,
                      marginLeft: 0,
                    }}
                  />
                  <button className="signupButton" size="small">
                    Sign In
                  </button>
                  <Link to="/signin" className="signupLink">
                    Already have any account?Signin
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </>
    </div>
  )
}

export default SignUp
