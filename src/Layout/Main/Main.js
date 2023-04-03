import React from 'react'
import Header from '../../pages/shared/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../pages/shared/Footer/Footer'
import Home from '../../pages/Home/Home/Home'

const Main = () => {
  return (
    <div>
      <>
        {/* <Header /> */}
        <Outlet />
        {/* <Footer /> */}
        {/* <Home/> */}
      </>
    </div>
  )
}

export default Main;
