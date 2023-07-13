import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const initState = { name: '', date: '', email: '', password: '' }

export default function AddTodo() {
  const { id } = useParams()

  const navigate = useNavigate()
  const [state, setState] = useState(initState);

  const handleChange = (e) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleChangeStatus = (e) => {
    // console.log(ale.target.vue);
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }
  useEffect(() => {

    const todoId = JSON.parse(localStorage.getItem('getTodo')) || []
    const todo = todoId.find(item => item.id === id)
    setState(todo)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    var { name, date, email, password, status } = state

    const usertodo = { ...state, name, date, email, password, status, id: Math.random().toString(36).slice(2) }
    console.log(usertodo);

    const getTodos = JSON.parse(localStorage.getItem('getTodo')) || []

    const updatedtodo = getTodos.map((oldTodo) => {
      console.log(oldTodo.id, state.id)
      if (oldTodo.id === state.id) {
        return state
      }
      return oldTodo

    })
    console.log(updatedtodo);

    // getTodos.push(usertodo);

    setTimeout(() => {
      localStorage.setItem("getTodo", JSON.stringify(updatedtodo))
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
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card p-5 mt-5">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Full Name</label>
                          <input type="name" name='name' value={state.name} onChange={handleChange} className="form-control" placeholder="Name Here" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">date</label>
                          <input type="date" name='date' value={state.date} onChange={handleChange} className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Email address</label>
                          <input type="email" name='email' value={state.email} onChange={handleChange} className="form-control" placeholder="name@example.com" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input type="password" name='password' value={state.password} onChange={handleChange} className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">status</label>
                        <select className="form-select" name="status" value={state.status} onChange={handleChangeStatus} >
                          {
                            ['active', 'inactive'].map((status, index) => {
                              return <option key={index} value={status} >{status}</option>
                            })
                          }

                        </select>
                      </div>
                      <div className="d-grid gap-2 col-6 mx-auto mt-3">
                        <button className="btn btn-primary" type="button" onClick={handleSubmit}>Update</button>
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
