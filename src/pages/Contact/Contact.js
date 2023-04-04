import React from 'react'
import Header from '../shared/Header/Header'
import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  CardContent,
} from '@mui/material'
import { Link } from 'react-router-dom'
import Footer from '../shared/Footer/Footer'
import image from '../../images/form.svg'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <Header />{' '}
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" sx={{ mt: 5 }}>
          {' '}
          Contact Me
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <img src={image} alt="contactImage" className="contactImage" data-aos="flip-left" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ mr: 0 }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ marginTop: 10, marginBottom: 5 }}
            >
              Make an Aggrement
            </Typography>

            <TextField
              id=" Email address*"
              label=" Email address*"
              multiline
              maxRows={4}
              placeholder="Enter Your Email"
              sx={{ width: '90%', margin: 1, marginLeft: 0 }}
            />
            <TextField
              id="Password*"
              label="Password*"
              multiline
              maxRows={4}
              placeholder="Enter Password"
              sx={{ width: '90%', margin: 1, marginLeft: 0 }}
            />
            <TextField
              id="Make a subject*"
              label="Make a subject*"
              multiline
              maxRows={4}
              sx={{ width: '90%', margin: 1, marginLeft: 0 }}
            />
            <TextField
              id="Write Your Message*"
              label="Write Your Message*"
              multiline
              rows={4}
              placeholder="Write Your Message*"
              sx={{ width: '90%', margin: 1, marginLeft: 0 }}
            />
            <button className="contactButton" size="small">
              Submit
            </button>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  )
}

export default Contact
