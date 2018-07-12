import React, { Component } from 'react'

import { connect } from 'react-redux'
import { toggleTodo } from '../redux/actions'
import { VisibilityFilters } from '../redux/actions/action-types'

import TodoItem from '../components/todo-item'
import Filter from './filter'

class TodoList extends Component {
  toggleItem (index) {
    const { toggleTodo } = this.props
    toggleTodo(index)
  }
  getFilteredItems () {
    const { todos, visibilityFilter } = this.props
    const filters = {
      [VisibilityFilters.SHOW_ALL]: todo => todo,
      [VisibilityFilters.SHOW_COMPLETE]: todo => todo.completed,
      [VisibilityFilters.SHOW_INCOMPLETE]: todo => !todo.completed 
    }
    return todos.filter(filters[visibilityFilter])
  }
  render () {
    return (
      <div className="todo-list">
        <div className="todo-list__items">
          {this.getFilteredItems().map((todo, index) => <TodoItem isComplete={todo.completed} text={todo.text} key={todo.text} onClick={() => this.toggleItem(index)} />)}
        </div>
        <Filter />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: index => dispatch(toggleTodo(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
