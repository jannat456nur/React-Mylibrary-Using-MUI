import { Box, Card, CardContent, Chip, Grid, TextField } from '@mui/material'
import React from 'react'

import SendIcon from '@mui/icons-material/Send'

const AddBooks = () => {
  const handleSubmit = (e) => {
    const form = new FormData(e.currentTarget)

    const userData = {
      bookname: form.get('bookname'),
      authername: form.get('authername'),
      image: form.get('img'),
    }

    console.log(userData)
    //send data to server
    fetch('https://mylibraryserver.vercel.app/bookDataCollection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
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
      {/* <Header /> */}

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
            {/* <Card
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
             
            </Card> */}
            <CardContent>
              <Chip
                label="Add book"
                sx={{
                  fontSize: '1.3rem',
                  color: 'black',
                }}
              />
              <form onSubmit={handleSubmit}>
                <TextField
                  id=" name*"
                  label=" Book Name*"
                  multiline
                  required
                  autoFocus
                  maxRows={4}
                  placeholder="Book Name"
                  name="bookname"
                  // onBlur={handleOnBlur}
                  sx={{
                    width: '100%',
                    margin: 1,
                    marginLeft: 0,
                    marginTop: 5,
                  }}
                />
                <TextField
                  id=" name*"
                  label="  Auther Name*"
                  multiline
                  required
                  autoFocus
                  maxRows={4}
                  placeholder="Auther Name"
                  name="authername"
                  // onBlur={handleOnBlur}
                  sx={{
                    width: '100%',
                    margin: 1,
                    marginLeft: 0,
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="img"
                  label="Enter Image Url"
                  type="textfield"
                  id="textfield"
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
          </Grid>
        </Grid>
      </Box>

      {/* <Footer /> */}
    </>
  )
}

export default AddBooks
