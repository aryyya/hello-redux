import React from 'react'
import PropTypes from 'prop-types'
import './todo-item.css'

const TodoItem = ({ completed, text, id, toggleTodo, deleteTodo }) => {
  return (
    <li className={`todo-item ${completed ? 'todo-item--completed' : ''}`}>
      <input className="todo-item__check" type="checkbox" checked={completed} readOnly onClick={() => toggleTodo(id)} />
      <span className="todo-item__text">{text}</span>
      <span className="todo-item__delete" onClick={() => deleteTodo(id)}>X</span>
    </li>
  )
}

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoItem
