import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import img1 from '../../../images/book3.jpg'
import img2 from '../../../images/AdobeStock_267858509_Preview.jpeg'
import img3 from '../../../images/book-3531412.jpg'
import img4 from '../../../images/book-library-with-open-textbook (1).jpg'
import img5 from '../../../images/book-library-with-open-textbook.jpg'
import img6 from '../../../images/signup background2.webp'
import img7 from '../../../images/signup background.jpg'
import img8 from '../../../images/low-angle-boy-library-reading.jpg'
import img9 from '../../../images/library-with-books.jpg'
import img10 from '../../../images/bookshelf-413705.jpg'
import img11 from '../../../images/library-with-books.jpg'
import './Gallery.css'

const Gallery = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="galleryBox">
        <Typography variant='h4' sx={{mt:3,mb:3}}>My gallery</Typography>
     
      <div class="service-box">
        <div class="single-box">
          <img src={img2} alt="" srcset=""  />
          <div class="overlay"></div>
          <div class="service-decs">
            <h3>Books section </h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              voluptates, laborum alias illo impedit quaerat.
            </p>
          </div>
        </div>
        <div class="single-box">
          <img src={img3}  alt="" srcset="" />
          <div class="overlay"></div>
          <div class="service-decs">
            <h3>Gallery </h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              voluptates, laborum alias illo impedit quaerat.
            </p>
          </div>
        </div>
        <div class="single-box">
          <img src={img4}  alt="" srcset="" />
          <div class="overlay"></div>
          <div class="service-decs">
            <h3>Gallery3</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              voluptates, laborum alias illo impedit quaerat.
            </p>
          </div>
        </div>
        <div class="single-box">
          <img src={img5}  alt="" srcset="" />
          <div class="overlay"></div>
          <div class="service-decs">
            <h3>Gallery 4</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              voluptates, laborum alias illo impedit quaerat.
            </p>
          </div>
        </div>
      </div>
    
    </Box>
  
  )
}

export default Gallery
