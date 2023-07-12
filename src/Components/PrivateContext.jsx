import { useAuthContext } from 'Context/AuthContext'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateContext() {
  const { isAuth } = useAuthContext()
  const location = useLocation()
  if (!isAuth)
    return <Navigate to='/' state={{ from: location.pathname }} replace />
      return (
      <>
      <myComponent />
      </>
      )
}
