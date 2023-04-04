import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import React from 'react'
import './Book.css'
import FavoriteIcon from '@mui/icons-material/Favorite'

const Book = (props) => {
  const { title, author, image } = props.book
  console.log(props.book)
  return (
    <Grid item xs={12} sm={6} md={3} lg={3}>
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
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              -by{author}
            </Typography>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <button className="button">Details</button>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 200, height: 250 }}
          image={image}
          alt="Live from space album cover"
        />
      </Card>
    </Grid>
  )
}

export default Book
