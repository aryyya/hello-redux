import React from 'react'
import './todo-item-panel.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { todosActions } from '../../redux/todos'

const TodoItemPanel = props => {
  return (
    <div className="todo-item-panel">
      <img
        className="todo-item-panel__delete icon"
        src="trash-icon.svg"
        alt="Delete todo item."
        onClick={() => props.deleteTodo(props.todo.id)}
      />
      <button
        onClick={() => props.setPriority(props.todo.id, 'low')}
      >
        low
      </button>
      <button
        onClick={() => props.setPriority(props.todo.id, 'medium')}
      >
        medium
      </button>
      <button
        onClick={() => props.setPriority(props.todo.id, 'high')}
      >
        high
      </button>
    </div>
  )
}

TodoItemPanel.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setPriority: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => dispatch(todosActions.deleteTodo(id)),
    setPriority: (id, priority) => dispatch(todosActions.setPriority(id, priority))
  }
}

export default connect(null, mapDispatchToProps)(TodoItemPanel)
