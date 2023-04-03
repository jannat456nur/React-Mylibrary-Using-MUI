
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main/Main'
import Home from '../pages/Home/Home/Home'
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'
import Contact from '../pages/Contact/Contact'
import Feedback from './../pages/Feedback/Feedback'
import Books from '../pages/Home/Books/Books'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/books',
        element: <Books></Books>,
      },
      {
        path: '/feedback',
        element: <Feedback></Feedback>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
    ],
  },
])
export default router
