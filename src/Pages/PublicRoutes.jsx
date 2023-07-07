import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Frontend from './Frontend'

export default function PublicRoutes() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<Frontend/>}/>
        <Route path='/Dashboard/*' element={<Dashboard/>}/>
        <Route path='/Login/*' element={<Login/>}/>
      </Routes>
    </>
  )
}
