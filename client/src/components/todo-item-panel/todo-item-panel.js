import React from 'react'
import PropTypes from 'prop-types'
import './todo-item-panel.css'

const TodoItemPanel = props => {
  const { id, deleteTodo } = props
  return (
    <div className="todo-item-panel">
      <img
        className="todo-item-panel__delete icon"
        src="trash-icon.svg"
        onClick={() => deleteTodo(id)}
      />
    </div>
  )
}

TodoItemPanel.propTypes = {
  id: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoItemPanel
