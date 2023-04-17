import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main/Main'
import Home from '../../pages/Home/Home/Home'
import SignIn from '../../pages/SignIn/SignIn'
import SignUp from '../../pages/SignUp/SignUp'
import Contact from '../../pages/Contact/Contact'
import Feedback from '../../pages/Feedback/Feedback'
import Books from '../../pages/Books/Books'
import Dashboard from '../../pages/Dashboard/Dashboard/Dashboard'
import PrivateRoute from './../PrivateRoute/PrivateRoute'
import DashboardLayout from '../../Layout/DashboardLayout/Dashboardlayout'
import MakeAdmin from '../../pages/Dashboard/MakeAdmin/MakeAdmin'
import ManageCourse from '../../pages/Dashboard/ManageCourse/ManageCourse'
import ManageReview from '../../pages/Dashboard/ManageReview/ManageReview'
import ManageUser from '../../pages/Dashboard/ManageUser/ManageUser'
import DashboardHome from '../../pages/Dashboard/DashboardHome/DashboardHome'
import DeleteBooks from '../../pages/Dashboard/DeleteBooks/DeleteBooks'
import AddBooks from '../../pages/Dashboard/AddBooks/AddBooks'
import BookDetails from '../../pages/Home/BookDetails/BookDetails'

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
      // {
      //   path: '/bookDataCollection/:id',
      //   element: <BookDetails></BookDetails>,
      // },
    ],
  },
  //did not work private route
  {
    path: '/dashboard',
    element: <DashboardLayout><Dashboard></Dashboard></DashboardLayout>,

    children: [
      
      {
        path: '/dashboard/home',
        element:<DashboardHome></DashboardHome>,
      },
      {
        path: '/dashboard/makeadmin',
        element: <MakeAdmin></MakeAdmin>,
      },
      {
        path: '/dashboard/deleteBooks',
        element: <DeleteBooks></DeleteBooks>
      },
      {
        path: '/dashboard/addBooks',
        element: <AddBooks></AddBooks>
      },
      {
        path: '/dashboard/manageReview',
        element: <ManageReview></ManageReview>
      },
      {
        path: '/dashboard/manageUser',
        element: <ManageUser></ManageUser>
      },

    ],
  },
])
export default router
