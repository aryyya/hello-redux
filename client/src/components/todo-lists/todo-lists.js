import React, { Component } from 'react'
import './todo-lists.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class TodoLists extends Component {

  static propTypes = {
    todoLists: PropTypes.array.isRequired
  }

  render () {
    const { todoLists } = this.props

    return (
      <div className="todo-lists">
        <div className="todo-lists__todo-lists">
          {todoLists.map(todoList => (
            <div
              className="todo-lists__todo-list"
              key={todoList.name}
            >
              <Link to={`/todo-list/${todoList.id}`}>
                {todoList.name} ({todoList.todoItems.length} items)
              </Link>
            </div>
          ))}
        </div>
        <div className="todo-lists__controls">
          <Link
            className="todo-list__add-button"
            to="/add-todo-list"
          >
            +
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { todoListsReducer } = state

  return {
    todoLists: (() => {
      return Object.keys(todoListsReducer).map(todoListId => todoListsReducer[todoListId])
    })()
  }
}

export default connect(mapStateToProps, null)(TodoLists)
