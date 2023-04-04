import React from 'react'
import './Banner.css'
import video from '../../../video/library-846.mp4'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className="banner">
      {/* <video autoPlay loop muted playsInline className="video">
        <source src={video} type="video/mp4" />
      </video> */}

     <div className="bannerTitle " data-aos="zoom-in-up">
          <Typography variant="h3" sx={{ py: 1, px: 2 }} >
          New to Our Website?
        </Typography>
     </div>
      
      
     <Link to='/signin' className='bannerButton'>Get stared</Link>

    </div>
  )
}

export default Banner
