import React from 'react'
import { Link } from 'react-router-dom'

const AddTodo = props => {
  return (
    <div className="add-todo">
      <Link
        to="/"
      >
        Go back.
      </Link>
      <br />
      This is the AddTodo component.
    </div>
  )
}

export default AddTodo
