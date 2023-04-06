import React from 'react'
import { AuthContext } from '../../context/AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { user } = React.useContext(AuthContext)
  const location = useLocation()
  if (user) {
    return children
  }
  // if user is not logged in, redirect to login page with the path user tried to access as state (from) so that we can redirect user to that page after login is successful

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}

export default PrivateRoute
