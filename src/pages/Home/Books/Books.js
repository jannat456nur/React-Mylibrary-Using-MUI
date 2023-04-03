import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import { Button } from '@mui/material'
import './Books.css'
import Book from '../Book/Book'

const Books = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetch('bookData.JSON')
      .then((res) => res.json())
      .then((data) => setBooks(data))
  }, [])
  return (
    <Box classname="books" sx={{ flexGrow: 1 }}>
      <Typography variant="h4" sx={{ py: 1, px: 2, mt: 5, mb: 5 }}>
        Books are Available
      </Typography>
      <Grid container>
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </Grid>
      <Button className="bottoButton">Read More</Button>
    </Box>
  )
}

export default Books