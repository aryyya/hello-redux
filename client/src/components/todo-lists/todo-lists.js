import React, { Component } from 'react'
import './todo-lists.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class TodoLists extends Component {
  render () {
    return (
      <div
        className="todo-lists"
      >
        {this.props.todoLists.map(todoList => (
          <div
            className="todo-lists__todo-list"
            key={todoList.name}
          >
            <Link
              to={`/todo-list/${todoList.id}`}
            >
              {todoList.name} ({todoList.todoItems.length} items)
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todoLists: (() => {
      return Object.keys(state.todoListsReducer).map(todoListId => state.todoListsReducer[todoListId])
    })()
  }
}

export default connect(mapStateToProps, null)(TodoLists)
