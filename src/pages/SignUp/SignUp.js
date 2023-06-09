import React, { useContext, useState } from 'react'
import {
  Alert,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead'
import './SignUp.css'
import { AuthContext } from '../../context/AuthProvider/AuthProvider'

const SignUp = () => {
  const [loginData, setLoginData] = useState('')

  const {
    createUser,
    isLoading,
    user,
    authError,
    signInUsingGoogle,
  } = useContext(AuthContext)

  const handleOnChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    console.log(field, value)
    const newLoginData = { ...loginData, [field]: value }
    setLoginData(newLoginData)
    console.log(newLoginData)
  }

  const handlesignInWithGoogle = () => {
    signInUsingGoogle()
  }

  const handleSignUpSubmit = (e) => {
    createUser(loginData.email, loginData.password)
    e.preventDefault()
  }

  return (
    <div className="signUpBox">
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
            {/* card starts here */}
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
                <Typography variant="h5" component="div" sx={{ marginTop: 3 }}>
                  Welcome Back!
                </Typography>
                {!isLoading && (
                  <form onSubmit={handleSignUpSubmit}>
                    <TextField
                      id=" Your Name*"
                      name="name"
                      label=" Your Name*"
                      type="text"
                      autoFocus
                      required
                      maxRows={4}
                      placeholder="Your Name"
                      onChange={handleOnChange}
                      sx={{
                        width: '100%',
                        margin: 1,
                        marginLeft: 0,
                      }}
                    />
                    <TextField
                      name="email"
                      type=" email"
                      id=" Email address*"
                      label=" Email address*"
                      required
                      multiline
                      maxRows={4}
                      placeholder="Enter Your Email"
                      onChange={handleOnChange}
                      sx={{
                        width: '100%',
                        margin: 1,
                        marginLeft: 0,
                      }}
                    />
                    <TextField
                      name="password"
                      type="password"
                      id="Password*"
                      label="Password*"
                      required
                      multiline
                      maxRows={4}
                      placeholder="Enter Password"
                      onChange={handleOnChange}
                      sx={{
                        width: '100%',
                        margin: 1,
                        marginLeft: 0,
                      }}
                    />
                    <button
                      type="submit"
                      value="sign up"
                      className="signupButton"
                      size="small"
                    >
                      Sign up
                    </button>
                    <button
                      type="submit"
                      value="sign up"
                      className="signInWithGoogleButton"
                      size="small"
                      onClick={handlesignInWithGoogle}
                    >
                      Sign in with google
                    </button>
                    <Link to="/signin" className="signupLink">
                      Already have any account?Signin
                    </Link>
                  </form>
                )}
                {/* condition ? true : false */}
                {isLoading && <CircularProgress />}
                {user?.email && ( // if user is logged in then show this message in console and redirect to home page
                  <Alert severity="success">user created successfully!</Alert>
                )}
                {authError && <Alert severity="error">{authError}</Alert>}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default SignUp
