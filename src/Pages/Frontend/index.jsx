import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function index() {
  return (
    <>
      <Routes>
        <Route index  element={<Home/>} />
        <Route path='About'  element={<About/>} />
        <Route path='Contact'  element={<Contact/>} />
        <Route path='AddTodo'  element={<AddTodo/>} />
        <Route path='TodoList'  element={<TodoList/>} />
      </Routes>
    </>
  )
}
