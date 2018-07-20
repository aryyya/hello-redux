import React from 'react'
import PropTypes from 'prop-types'
import './todo-item.css'

const TodoItem = ({ completed, text, id, toggleTodo }) => {
  return (
    <li className={`todo-item ${completed ? 'todo-item--completed' : ''}`} onClick={() => toggleTodo(id)}>
      <span className="todo-item__text">{text}</span>
    </li>
  )
}

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoItem
