import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider/AuthProvider'
import { CircularProgress } from '@mui/material'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return <CircularProgress />
  }

  if (user) {
    return children
  }

  return <Navigate to="/signup" state={{ from: location }} replace></Navigate>
}

export default PrivateRoute
