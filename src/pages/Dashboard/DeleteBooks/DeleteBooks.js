import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import './DeleteBooks.css'
import { Card, CardContent, CardMedia, IconButton } from '@mui/material'

import FavoriteIcon from '@mui/icons-material/Favorite'

const DeleteBooks = () => {
  const [books, setBooks] = useState([])

  // const {data:,isLoading} = useQuery({
  //   queryKey: ['bookDataCollection'],
  //   queryFn: () => fetch('http://localhost:5000/bookDataCollection')
  //   .then((res) => res.json()),

  // })
  useEffect(() => {
    fetch('https://amused-pleat-worm.cyclic.app/bookDataCollection')
      .then((res) => res.json())
      .then((data) => setBooks(data))
  }, [])

  const handleDelete = (id) => {
    fetch(`https://amused-pleat-worm.cyclic.app/bookDataCollection/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const remaining = books.filter((book) => book._id !== id)
          setBooks(remaining)
        }
      })
  }

  return (
    <>
      <Box classname="books" sx={{ flexGrow: 1 }}>
        <Typography variant="h4" sx={{ py: 1, px: 2, mt: 5, mb: 5 }}>
          Books are Available
        </Typography>
        <Grid container>
          {/* {books.map((book) => (
            <Book key={book.id} book={book}></Book>
          ))} */}

          {books.map((book) => (
            <Grid key={book.id} item xs={12} sm={6} md={3} lg={3}>
              <Card
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  // justifyContent: 'center',
                  width: 370,
                  height: 250,
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {book.bookname}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      -by{book.authername}
                    </Typography>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="button"
                    >
                      Delete
                    </button>
                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 200, height: 250 }}
                  image={book.image}
                  alt="Live from space album cover"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* <Button className="bottomButton">Read More</Button> */}
      </Box>
    </>
  )
}

export default DeleteBooks
