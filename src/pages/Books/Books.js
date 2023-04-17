// import React from 'react'
// import TextField from '@material-ui/core/TextField'
// import SearchIcon from '@mui/icons-material/Search'
// import './Books.css'
// import { Button } from '@material-ui/core'
// import { useState } from 'react'
// import axios from 'axios'

// const Books = ({ value, onChange, placeholder }) => {

//   const [book,setBook] = useState('')
//   const [result,setResult] = useState([])
//   const [apiKey,setApiKey] = useState('AIzaSyBgLEopjH_m5dsq_6LM5fng4MWqjHXpQqU') //get your own key from google books api

//   const handleChange = (e) => {
//     setBook(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(book)
//     // axios.get(" https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=40")
//     fetch(" https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=40")
//     .then(data => {
//      console.log(data)
//     })

//     // fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=40`)
//     // .then(res => res.json())
//     // .then(data => {
//     //   setResult(data.items)
//     //   console.log(data.items)
//     // })
//   }

//   return (
//     <>
//  <form onSubmit={handleSubmit} style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginBottom: '2rem',
//         marginTop: '2rem',
//       }}>

//       <TextField
//       type='text'
//         label={placeholder}
//         value={value}
//         onChange={handleChange}
//         placeholder="search  books here "
//         variant="outlined"
//         size="small"
//         InputProps={{
//           startAdornment: <SearchIcon />,
//           style: { paddingRight: '0.5rem' },
//         }}
//         halfWidth
//         className="icon"
//       />
//       <Button variant="contained" color="primary" type='submit'  >
//         Search
//       </Button>

//  </form>

//     </>
//   );
// };

// export default Books;

import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteIcon from '@mui/icons-material/Favorite'
import './Books.css'
import { Box, Button, Card, CardContent, CardMedia } from '@material-ui/core'
import axios from 'axios'
import { Grid } from '@mui/material'
import { IconButton, Link, Typography } from '@mui/material'

const Books = ({ value, onChange, placeholder }) => {
  const [book, setBook] = useState('')
  const [result, setResult] = useState([])
  const [apiKey, setApiKey] = useState(
    'AIzaSyAVCkgE-mOAUCkJYy416RllUNQGIr7tGYs',
  ) //get your own key from google books api

  const handleChange = (e) => {
    setBook(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(book)
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=40`,
      )
      .then((data) => {
        console.log(data)
        setResult(data.data.items)
        console.log(data.data.items)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
          marginTop: '2rem',
        }}
      >
        <TextField
          type="text"
          label={placeholder}
          value={value}
          onChange={handleChange}
          placeholder="search books here"
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: <SearchIcon />,
            style: { paddingRight: '0.5rem' },
          }}
          halfWidth
          className="icon"
        />
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
      </form>
      <Grid container>
        {result.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Card
              // sx={{
              //   display: 'flex',
              //   alignItems: 'center',
              //   justifyContent: 'center',
              //   width: 300,
              //   height: 250,
              //   marginTop: 10,
              //   marginBottom: 10,
              // }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 300,
                    height: 250,
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                       <div>
                    {item.volumeInfo.imageLinks?.thumbnail && (
                      <img
                        src={item.volumeInfo.imageLinks.thumbnail}
                        alt="book"
                        style={{ width: '100px', height: '100px' }}
                      />
                    )}
                  </div>
                    <Typography component="div" variant="h5">
                      {item.volumeInfo.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      -by {item.volumeInfo.authors}
                    </Typography>
                     <Typography>{item.volumeInfo.publishedDate}</Typography>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <Link>
                      <button className="button">Details</button>
                    </Link>
                  
                  </CardContent>
                 
                </Box>
              </Card>
            </Grid>
            // <div
            //   key={index}
            //   style={{
            //     display: 'flex',
            //     justifyContent: 'center',
            //     alignItems: 'center',
            //     marginBottom: '1rem',
            //   }}
            // >
            //   {item.volumeInfo.imageLinks?.thumbnail && (
            //     <img
            //       src={item.volumeInfo.imageLinks.thumbnail}
            //       alt="book"
            //       style={{ width: '100px', height: '100px' }}
            //     />
            //   )}
            //   <div style={{ marginLeft: '1rem' }}>
            //     <h3>{item.volumeInfo.title}</h3>
            //     <p>{item.volumeInfo.authors}</p>
            //     <p>{item.volumeInfo.publishedDate}</p>
            //   </div>
            // </div>
          )
        })}
      </Grid>
    </>
  )
}

export default Books
