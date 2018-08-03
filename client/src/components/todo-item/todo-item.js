import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './todo-item.css'
import Checkbox from '../checkbox/checkbox'
import Priority from '../priority/priority'
import { todosActions } from '../../redux/todos'
import { withRouter } from 'react-router-dom'

const TodoItem = props => {
  return (
    <li
      className={`todo-item ${props.todo.completed ? 'todo-item--completed' : ''}`}
      onClick={() => props.history.push(`/edit-todo/${props.todo.id}`)}
    >
      <div className="todo-item__top">
        <div className="todo-item__text-wrapper">
          <Priority
            todo={props.todo}
          />
          <span className={`todo-item__text todo-item__text--${props.todo.priority}`}>{props.todo.text}</span>
        </div>
        <div className="todo-item__buttons">
          <Checkbox
            checked={props.todo.completed}
            onClick={() => props.toggleTodo(props.todo.id)}
          />
        </div>
      </div>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(todosActions.toggleTodo(id))
  }
}

export default connect(null, mapDispatchToProps)(
  withRouter(
    TodoItem
  )
)
