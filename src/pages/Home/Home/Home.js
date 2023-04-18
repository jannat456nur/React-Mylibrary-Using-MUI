import React from 'react'
import Header from '../../shared/Header/Header'
import Banner from '../Banner/Banner'
import Books from '../Books/Books'
import Footer from '../../shared/Footer/Footer'
import Feedback from '../../Feedback/Feedback'
import Feedbacks from '../Feedbacks/Feedbacks'
import Gallery from '../Gallery/Gallery'
import Faq from '../Faq/Faq'
import Location from '../Location/Location'

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Banner />
      <Books />

      <Gallery />
      <Faq />
      {/* <Location/> */}
      <Feedbacks />

      {/* <Footer /> */}
    </div>
  )
}

export default Home
