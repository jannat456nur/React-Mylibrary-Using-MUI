import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import './Books.css'
import Book from '../Book/Book'
import { useQuery } from '@tanstack/react-query'

const Books = () => {
  const [books, setBooks] = useState([])

  // const {data:,isLoading} = useQuery({
  //   queryKey: ['bookDataCollection'],
  //   queryFn: () => fetch('https://mylibraryserver.vercel.app/bookDataCollection')
  //   .then((res) => res.json()),

  // })
  // fetch data from server
  useEffect(() => {
    fetch('https://mylibraryserver.vercel.app/bookDataCollection')
      .then((res) => res.json())
      .then((data) => setBooks(data))
  }, [])
  return (
    <>
      <Box classname="books" sx={{ flexGrow: 1 }}>
        <Typography variant="h4" sx={{ py: 1, px: 2, mt: 5, mb: 5 }}>
          Books are Available
        </Typography>
        <Grid container>
          {books.map((book) => (
            <Book key={book.id} book={book}></Book>
          ))}
        </Grid>
        {/* <Button className="bottomButton">Read More</Button> */}
      </Box>
    </>
  )
}

export default Books
