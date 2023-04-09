import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Typography } from '@mui/material'
import './Feedbacks.css'

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/feedback')
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
  }, [])
  return (
    <>
      <Typography variant="h5" sx={{ py: 2, pl: 2 }}>
        {' '}
        STUDENT'S FEEDBACK
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
      >
        {feedbacks.map((user) => (
          <SwiperSlide key={user.id}>
            <div className="box">
              <div className="inner-box">
                <div className="review">{user.review}</div>
                <div className="name">🎔 -by {user.name}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Feedbacks