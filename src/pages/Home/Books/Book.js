import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import './Books.css'
import book7 from '../../../images/book7.jpg'

const Book = ({ book }) => {
    const book = {title,auther,image}
  console.log(book)
  return (
    <div>
      <Card sx={{ display: 'flex', width: 370, height: 250 }} className="books">
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Ghost Forest
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              -by Pik-Shuen Fung
            </Typography>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <button className="button">Details</button>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 200, height: 250, marginRight: 0 }}
          image={book7}
          alt="Live from space album cover"
        />
      </Card>
    </div>
  )
}

export default Book
