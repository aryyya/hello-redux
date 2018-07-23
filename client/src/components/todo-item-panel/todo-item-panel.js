import React from 'react'
import PropTypes from 'prop-types'
import './todo-item-panel.css'

const TodoItemPanel = props => {
  const { id, deleteTodo, setPriority } = props
  return (
    <div className="todo-item-panel">
      <img
        className="todo-item-panel__delete icon"
        src="trash-icon.svg"
        onClick={() => deleteTodo(id)}
      />
      <button
        onClick={() => setPriority(id, 'low')}
      >
        low
      </button>
      <button
        onClick={() => setPriority(id, 'medium')}
      >
        medium
      </button>
      <button
        onClick={() => setPriority(id, 'high')}
      >
        high
      </button>
    </div>
  )
}

TodoItemPanel.propTypes = {
  id: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setPriority: PropTypes.func.isRequired
}

export default TodoItemPanel
