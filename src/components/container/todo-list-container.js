import React, { Component } from 'react'

import { connect } from 'react-redux'
import { toggleTodo, setVisibilityFilter } from '../../redux/actions'
import { VisibilityFilters } from '../../redux/actions/action-types'

import TodoList from '../presentational/todo-list'

class TodoListContainer extends Component {
  render () {
    const { todos, toggleTodo, visibilityFilter, setVisibilityFilter } = this.props
    return (
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        visibilityFilter={visibilityFilter}
        setVisibilityFilter={setVisibilityFilter} />
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: (() => {
      const filters = {
        [VisibilityFilters.SHOW_ALL]: todo => todo,
        [VisibilityFilters.SHOW_COMPLETE]: todo => todo.completed,
        [VisibilityFilters.SHOW_INCOMPLETE]: todo => !todo.completed
      }
      return state.todos.filter(filters[state.visibilityFilter])
    })(),
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: index => dispatch(toggleTodo(index)),
    setVisibilityFilter: visibilityFilter => dispatch(setVisibilityFilter(visibilityFilter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
