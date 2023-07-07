import React from 'react'
import { Routes ,Route } from 'react-router-dom'

export default function index() {
  return (
    <>
      <Routes>
        <Route path='welecomeDashboard' element={<welecomeDashboard/>} />
      </Routes>
    </>
  )
}
