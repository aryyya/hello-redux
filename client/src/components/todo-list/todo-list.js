import React, { Component } from 'react'
import './todo-list.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TodoItem from '../todo-item/todo-item'
import { todosActions } from '../../redux/todos'

class TodoList extends Component {
  componentDidMount () {
    // this.props.fetchTodos()
  }
  render () {
    const props = this.props
    return (
      <div className={`todo-list ${props.isFetching ? 'todo-list--loading' : ''}`}>
        <div className="todo-list__title-section">
          <h1 className="todo-list__title">{this.props.todoList.name}</h1>
          <h2 className="todo-list__subtitle">{new Date().toDateString()}</h2>
        </div>
        <div className="todo-list__todos-section">
          <ul className="todo-list__list">
            {props.todos.map(todo =>
              <TodoItem
                todo={todo}
                key={todo.id}
              />
            )}
          </ul>
        </div>
        <div className="todo-list__controls-section">
          <Link
            className="todo-list__add-button"
            to={`/todo-list/${this.props.match.params.todoListId}/add-todo-item`}
          >
            +
          </Link>
        </div>
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchTodos: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  const { todoListId } = ownProps.match.params
  const todoList = state.todoListsReducer[todoListId]
  const todoItems = todoList.todoItems.map(todoItemId => state.todosReducer.todos[todoItemId])
  return {
    todoList,
    todos: todoItems,
    isFetching: state.todosReducer.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: () => dispatch(todosActions.fetchTodos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
