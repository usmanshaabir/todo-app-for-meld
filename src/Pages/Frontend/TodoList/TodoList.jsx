import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import { useNavigate } from 'react-router-dom';
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function TodoList() {
  const [state, setState] = useState([]);
  const navigate =useNavigate()

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('getTodo')) || [];
    setState(todos);
  }, []);

  const handleDelete = (item) => {
    const deleteTod = state.filter((tod) => tod.id !== item.id);
    setState(deleteTod);
    localStorage.setItem('getTodo', JSON.stringify(deleteTod));
  };
  // const handleEdit = () => {

  // }
  return (
    <>
      <div className="container">
        <div className="Row">
          <div className="col">
            <h1 className="text-center mt-5">TodoList</h1>
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {state.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        <td className="text-center">
                          <span>
                            <i
                              className="bi bi-archive me-2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Tooltip on top"
                              onClick={() => handleDelete(item)}
                            ></i>
                          </span>
                          <span>
                            <i className="bi bi-pencil-square" onClick={() => navigate(`/TodoList/getTodo/${item.id}`)}></i>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
