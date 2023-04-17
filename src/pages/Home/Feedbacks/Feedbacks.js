import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Chip, Stack, Typography } from '@mui/material'
import './Feedbacks.css'
import Feedback from './../../Feedback/Feedback';

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/feedback')
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
  }, [])
  return (
    <>
      <Typography variant="h4" sx={{ py: 2, pl: 2 }}>
        {' '}
        Feedbacks
      </Typography>
     
      <Swiper
        spaceBetween={50}
        // centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        freeMode={true}
        pagination={{
          clickable: true,
          className: 'pagination',
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        // pagination={{
        //   clickable: true,
        //   renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>'
        //   },
        // }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        watchSlidesProgress={true}
      >
        {feedbacks.map((user) => (
          <SwiperSlide key={user.id}>
            <div className="box">
              <div className="inner-box">
                <div className="">{user.description}</div>
                <div className="name">🎔 -by {user.username}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Feedbacks
