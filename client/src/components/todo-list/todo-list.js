import React, { Component } from 'react'
import './todo-list.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TodoItem from '../todo-item/todo-item'
import { todosActions } from '../../redux/todo-items'
import Button from '../button/button'

class TodoList extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    todoItems: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    fetchTodoItems: PropTypes.func.isRequired
  }

  componentDidMount () {
    // this.props.fetchTodoItems()
  }

  render () {
    const { history, isFetching, todoList, todoItems } = this.props
    return (
      <div className={`todo-list ${isFetching ? 'todo-list--loading' : ''}`}>
        <div className="todo-list__back">
          <Button
            icon="arrow"
            action={() => history.push('/todo-list')}
          />
        </div>
        <div className="todo-list__title-section">
          <h1 className="todo-list__title" onClick={() => history.push(`/todo-list/${todoList.id}/edit-todo-list`)}>{todoList.name}</h1>
          <h2 className="todo-list__subtitle">{new Date().toDateString()}</h2>
        </div>
        <div className="todo-list__todos-section">
          <ul className="todo-list__list">
            {todoItems.map(todo =>
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
            to={`/todo-list/${todoList.id}/add-todo-item`}
          >
            +
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { todoListId } = ownProps.match.params
  const todoList = state.todoListsReducer[todoListId]
  const todoItems = todoList.todoItems.map(todoItemId => state.todoItemsReducer.todoItems[todoItemId])
  return {
    todoList,
    todoItems: todoItems,
    isFetching: state.todoItemsReducer.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTodoItems: () => dispatch(todosActions.fetchTodoItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
