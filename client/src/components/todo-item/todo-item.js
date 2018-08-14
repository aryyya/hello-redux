import React, { Component } from 'react'
import './todo-item.css'
import PropTypes from 'prop-types'
import Checkbox from '../checkbox/checkbox'
import Priority from '../priority/priority'
import { withRouter } from 'react-router-dom'

class TodoItem extends Component {

  static propTypes = {
    todo: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render () {
    const { history, todo } = this.props
    const { todoListId } = this.props.match.params
  
    return (
      <li
        className={`todo-item ${todo.completed ? 'todo-item--completed' : ''}`}
        onClick={() => history.push(`/todo-list/${todoListId}/edit-todo-item/${todo.id}`)}
      >
        <div className="todo-item__top">
          <div className="todo-item__text-wrapper">
            <Priority todo={todo} />
            <span className={`todo-item__text todo-item__text--${todo.priority}`}>{todo.text}</span>
          </div>
          <div className="todo-item__buttons">
            <Checkbox todo={todo} />
          </div>
        </div>
      </li>
    )    
  }
}

export default withRouter(TodoItem)
