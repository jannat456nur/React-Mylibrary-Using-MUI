import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Button, Typography } from '@mui/material'
import './ManageReview.css'

const ManageREview = () => {
  const [feedbacks, setFeedbacks] = useState([])
  // fetch data from server
  useEffect(() => {
    fetch('https://amused-pleat-worm.cyclic.app/feedback')
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
  }, [])

  // delete data from server
  const handleDelete = (id) => {
    fetch(`https://amused-pleat-worm.cyclic.app/feedback/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const remaining = feedbacks.filter((user) => user._id !== id)
          setFeedbacks(remaining)
        }
      })
  }

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
              <div className="">
                <div className="">{user.description}</div>
                <div className="name">🎔 -by {user.username}</div>
                <div>
                  {' '}
                  <Button
                    onClick={() => handleDelete(user._id)}
                    className="deleteReview"
                  >
                    delete
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ManageREview
