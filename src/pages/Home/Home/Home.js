import React from 'react'
import Header from '../../shared/Header/Header'
import Banner from '../Banner/Banner'
import Books from '../Books/Books'
import Footer from '../../shared/Footer/Footer'
import Feedback from '../../Feedback/Feedback'
import Feedbacks from '../Feedbacks/Feedbacks'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Books />
      <Feedbacks />
      <Footer />
    </div>
  )
}

export default Home
