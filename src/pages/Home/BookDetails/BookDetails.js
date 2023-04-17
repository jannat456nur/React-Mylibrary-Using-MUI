import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './BookDetails.css'
import img from '../../../images/book11.jpg'
import { useParams } from 'react-router-dom'

const BookDetails = () => {
  const [bookDetails, setBookDetails] = useState({})

  const { _id } = useParams();

  useEffect(() => {
    fetch(`https://amused-pleat-worm.cyclic.app/bookDataCollection/${_id}}`)
      .then((res) => res.json())
      .then((data) => setBookDetails(data))
      
  }, [_id])

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          

          {/* details */}
          <Grid container>
            {/* {bookDetails.map((book) => ( */}
              <>
              
                <Grid key={bookDetails._id} item xs={12} sm={12} md={6} lg={6}>
                  <img src={bookDetails.image} alt="" className="detailsImage" />
                </Grid>
                <Grid
               
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  className="detailsText"
                  sx={{ mt: { sm: 5, md: 25, lg: 25 } }}
                >
                  <Typography variant="h4" sx={{ mt: 3, mb: 3 }}>
                    Book Details
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 3, mb: 3 }}>
                    Book Name: {bookDetails.bookname}
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 3, mb: 3 }}>
                    Auther Name:{bookDetails.authername}
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 3, mb: 3 }}>
                    Price: 200$
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 3, mb: 3 }}>
                    Rating: 4.5
                  </Typography>
                  <button className="downloadButton">Download</button>
                  <button className="previewButton">preview</button>
                </Grid>
              </>
            {/* ))} */}
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default BookDetails
