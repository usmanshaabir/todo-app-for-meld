import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const initState = { name: '', date: '', email: '', password: '' }

export default function AddTodo() {

  const navigate = useNavigate()
  const [state, setState] = useState(initState);

  const handleChange = (e) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    var { name, date, email, password } = state

    const usertodo = { name, date, email, password, status: 'active' , id: Math.random().toString(36).slice(2)}

    const getTodos = JSON.parse(localStorage.getItem('getTodo')) || []

    getTodos.push(usertodo);
    console.log(getTodos);

    setTimeout(() => {
      localStorage.setItem("getTodo", JSON.stringify(getTodos))

    }, 1000)

  }

  const TodoList = () => {
    navigate('/TodoList')
  }
  return (
    <>
      <div className="container">
        <div className="Row">
          <div className="col">
            <button className="btn btn-success mt-5" onClick={TodoList}>TodoList</button>
            <h1 className='text-center mt-1' >AddTodo</h1>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1 className='text-center mt-5'>Login Area</h1>
                  <div className="card p-5 mt-5">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Full Name</label>
                          <input type="name" name='name' onChange={handleChange} className="form-control" placeholder="Name Here" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">date</label>
                          <input type="date" name='date' onChange={handleChange} className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Email address</label>
                          <input type="email" name='email' onChange={handleChange} className="form-control" placeholder="name@example.com" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input type="password" name='password' onChange={handleChange} className="form-control" />
                        </div>
                      </div>
                      <div className="d-grid gap-2 col-6 mx-auto mt-3">
                        <button className="btn btn-primary" type="button" onClick={handleSubmit}>Button</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
