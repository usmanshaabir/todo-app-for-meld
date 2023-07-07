import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Frontend from './Frontend';
import Dashboard from './Dashboard';
import Login from './Login';

export default function PublicRoutes() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<Frontend/>}/>
        <Route path='/Dashboard/*' element={<Dashboard/>}/>
        <Route path='/Login/*' element={<Login/>}/>
        <Route path='*' element={<h1> 404 Pages Not Found </h1>}/>
      </Routes>
    </>
  )
}
