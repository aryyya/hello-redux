import React, { Component } from 'react'

import { connect } from 'react-redux'
import { toggleTodo } from '../redux/actions'

import TodoItem from '../components/todo-item'

class TodoList extends Component {
  toggleItem (index) {
    const { toggleTodo } = this.props
    toggleTodo(index)
  }
  render () {
    const { todos } = this.props
    return (
      <div className="todo-list">
        {todos.map((todo, index) => <TodoItem isComplete={todo.completed} text={todo.text} key={todo.text} onClick={() => this.toggleItem(index)} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: index => dispatch(toggleTodo(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
