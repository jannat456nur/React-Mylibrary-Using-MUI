import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'

import './SignIn.css'
import image from '../../images/book-3531412.jpg'
import Header from '../shared/Header/Header'
import Footer from '../shared/Footer/Footer'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
      <Header />{' '}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} sm={6} md={7} lg={7}>
            <img src={image} alt="signinImage" className="signinImage" />
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5}>
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
                <VpnKeyIcon
                  sx={{
                    fontSize: 30,
                    borderRadius: '50%',
                    backgroundColor: 'green',
                    color: 'white',
                    padding: 1,
                  
                  }}
                />
                <Typography variant="h5" component="div" sx={{ marginTop: 3 }}>
                  Sign In
                </Typography>

                <TextField
                  id=" Email address*"
                  label=" Email address*"
                  multiline
                  maxRows={4}
                  placeholder="Enter Your Email"
                  sx={{ width: '100%', margin: 1, marginLeft: 0 }}
                />
                <TextField
                  id="Password*"
                  label="Password*"
                  multiline
                  maxRows={4}
                  placeholder="Enter Password"
                  sx={{ width: '100%', margin: 1, marginLeft: 0}}
                />
                <button className="signInButton" size="small">
                  Sign In
                </button>
                <Link to='/signup' className="signinLink">Dont have any account?Signup</Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  )
}

export default SignIn
