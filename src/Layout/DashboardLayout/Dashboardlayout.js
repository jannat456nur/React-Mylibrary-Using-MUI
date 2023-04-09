import React from 'react'
import Header from '../../pages/shared/Header/Header'
import { Outlet } from 'react-router-dom'
import Dashboard from './../../pages/Dashboard/Dashboard/Dashboard';

const dashboardLayout = () => {
  return <div>
    <Header/>
    <Dashboard></Dashboard>
  </div>
}

export default dashboardLayout
