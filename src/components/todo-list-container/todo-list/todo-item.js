import React from 'react'
import PropTypes from 'prop-types'

import './todo-item.css'

const TodoItem = props => {
  const { completed, text, index, toggleTodo } = props
  return (
    <li className={`todo-item ${completed ? 'todo-item--completed' : ''}`} onClick={() => toggleTodo(index)}>
      <span className="todo-item__text">{text}</span>
    </li>
  )
}

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoItem
