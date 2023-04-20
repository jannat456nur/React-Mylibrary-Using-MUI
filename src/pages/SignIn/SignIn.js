import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from '@mui/material'

import './SignIn.css'
import image from '../../images/signin.svg'
import Header from '../shared/Header/Header'
import Footer from '../shared/Footer/Footer'
import MailIcon from '@mui/icons-material/Mail'
import TextField from '@mui/material/TextField'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider/AuthProvider'

const SignIn = () => {
  const [loginData, setLoginData] = useState('')
  const { signIn, user, authError, isLoading } = useContext(AuthContext)
  const [loginUserEmail, setLoginUserEmail] = useState('')
  // const [token] = useToken()
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  const handleOnChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    console.log(field, value)
    const newLoginData = { ...loginData, [field]: value }
    setLoginData(newLoginData)
    console.log(newLoginData)
  }

  const handleSignIn = (e) => {
    signIn(loginData.email, loginData.password)
    setLoginUserEmail(loginData.email)

    // navigate(from, { replace: true })
    e.preventDefault()
  }

  return (
    <>
      {/* <Header />{' '} */}
      <Box sx={{ flexGrow: 1, m: 5 }}>
        <Grid container>
          <Grid item xs={12} sm={6} md={7} lg={7} data-aos="flip-up">
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
                <MailIcon
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
                <form onSubmit={handleSignIn}>
                  <TextField
                    id=" Email address*"
                    label=" Email address*"
                    type="email"
                    name="email"
                    multiline
                    maxRows={4}
                    placeholder="Enter Your Email"
                    required
                    autoFocus
                    onChange={handleOnChange}
                    sx={{ width: '100%', margin: 1, marginLeft: 0 }}
                  />
                  <TextField
                    type="password"
                    name="password"
                    id="Password*"
                    label="Password*"
                    multiline
                    maxRows={4}
                    placeholder="Enter Password"
                    required
                    autoFocus
                    onChange={handleOnChange}
                    sx={{ width: '100%', margin: 1, marginLeft: 0 }}
                  />
                  <button
                    className="signInButton"
                    size="small"
                    type="submit"
                    value="sign in"
                  >
                    Sign In
                  </button>

                  <Link to="/signup" className="signinLink">
                    Dont have any account?Signup
                  </Link>
                  <Typography className="text" sx={{color:"grey",fontSize:".8rem",mt:5}}>
                    To visit admin panel signin with
                    (email:admin@gmail.com,pass:admin123)
                  </Typography>
                </form>
                {isLoading && <CircularProgress />}
                {user?.email && ( // if user is logged in then show this message in console and redirect to home page
                  <Alert severity="success">user login successfully!</Alert>
                )}
                {authError && <Alert severity="error">{authError}</Alert>}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      {/* <Footer /> */}
    </>
  )
}

export default SignIn
