import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './todo-item.css'
import Checkbox from '../checkbox/checkbox'
import Circle from '../circle/circle'
import TodoItemPanel from '../todo-item-panel/todo-item-panel'
import * as todosActions from '../../redux/todos'

const TodoItem = props => {
  return (
    <li className={`todo-item ${props.todo.completed ? 'todo-item--completed' : ''} ${props.todo.id === props.selectedTodoId ? 'todo-item--selected' : ''}`}>
      <div className="todo-item__top">
        <div className="todo-item__text-wrapper">
          <Circle
            priority={props.todo.priority}
          />
          <span className="todo-item__text">{props.todo.text}</span>
        </div>
        <div className="todo-item__buttons">
          <Checkbox
            checked={props.todo.completed}
            onClick={() => props.toggleTodo(props.todo.id)}
          />
          <img
            className="todo-item__settings icon"
            src="settings-icon.svg"
            alt="Change todo item settings."
            onClick={() => props.selectTodo(props.todo.id)}
          />
        </div>
      </div>
      {
        props.selectedTodoId === props.todo.id
          ? <TodoItemPanel
              todo={props.todo}
            />
          : null
      }
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  selectTodo: PropTypes.func.isRequired,
  selectedTodoId: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  return {
    selectedTodoId: state.todos.selectedTodoId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(todosActions.toggleTodo(id)),
    selectTodo: id => dispatch(todosActions.selectTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
