import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, addTodo, fetchTodos } from '../../redux/todos'
import { setVisibilityFilter, VisibilityFilters } from '../../redux/visibility-filter' 
import TodoList from '../todo-list/todo-list'

class TodoListContainer extends Component {
  componentDidMount () {
    this.props.fetchTodos()
  }
  render () {
    const { todos, visibilityFilter, toggleTodo, addTodo, setVisibilityFilter, isFetching } = this.props
    return (
      <TodoList
        todos={todos}
        visibilityFilter={visibilityFilter}
        toggleTodo={toggleTodo}
        addTodo={addTodo}
        setVisibilityFilter={setVisibilityFilter}
        isFetching={isFetching}
      />
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
      const { todos } = state.todos
      const todosArray = Object.keys(todos).map(id => {
        return {
          ...todos[id],
          id: Number(id)
        }
      })
      return todosArray.filter(filters[state.visibilityFilter])
    })(),
    visibilityFilter: state.visibilityFilter,
    isFetching: state.todos.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: index => dispatch(toggleTodo(index)),
    addTodo: text => dispatch(addTodo(text)),
    setVisibilityFilter: visibilityFilter => dispatch(setVisibilityFilter(visibilityFilter)),
    fetchTodos: () => dispatch(fetchTodos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
