import React from 'react'
import PropTypes from 'prop-types'
import './todo-item-panel.css'

const TodoItemPanel = props => {
  const { id, deleteTodo } = props
  return (
    <div className="todo-item-panel">
      <span className="todo-item-panel__delete" onClick={() => deleteTodo(id)}>delete</span>
    </div>
  )
}

TodoItemPanel.propTypes = {
  id: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoItemPanel
