import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main/Main'
import Home from '../../pages/Home/Home/Home'
import SignIn from '../../pages/SignIn/SignIn'
import SignUp from '../../pages/SignUp/SignUp'
import Contact from '../../pages/Contact/Contact'
import Feedback from '../../pages/Feedback/Feedback'
import Books from '../../pages/Home/Books/Books'
import Dashboard from '../../pages/Dashboard/Dashboard/Dashboard'
import PrivateRoute from './../PrivateRoute/PrivateRoute'
import DashboardLayout from '../../Layout/DashboardLayout/Dashboardlayout'
import MakeAdmin from '../../pages/Dashboard/MakeAdmin/MakeAdmin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    // errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/feedback',
        element: <Feedback></Feedback>,
      },
      {
        path: '/books',
        element: <Books></Books>,
      },
    ],
  },
  //did not work private route
  {
    path: '/dashboard',
    element: (
    
        <DashboardLayout></DashboardLayout>
    
    ),

    children: [
      {
        path: '/dashboard',
        element:<Dashboard></Dashboard>,
      },
      {
        path: '/dashboard/makeadmin',
        element: <MakeAdmin></MakeAdmin>,
      },
    ],
  },
])
export default router
