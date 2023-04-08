import React from 'react'
import Header from '../../pages/shared/Header/Header'
import { Outlet } from 'react-router-dom'

const dashboardLayout = () => {
  return <div>
    <Header/>
    <Outlet/>
  </div>
}

export default dashboardLayout
