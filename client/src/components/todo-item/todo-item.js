import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './todo-item.css'
import Checkbox from '../checkbox/checkbox'
import Priority from '../priority/priority'
import { todosActions } from '../../redux/todo-items'
import { withRouter } from 'react-router-dom'

const TodoItem = props => {
  return (
    <li
      className={`todo-item ${props.todo.completed ? 'todo-item--completed' : ''}`}
      onClick={() => props.history.push(`/todo-list/${props.match.params.todoListId}/edit-todo-item/${props.todo.id}`)}
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
            todo={props.todo}
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
