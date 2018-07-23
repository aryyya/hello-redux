import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, addTodo, fetchTodos, selectTodo, setPriority } from '../../redux/todos'
import { setVisibilityFilter, VisibilityFilters } from '../../redux/visibility-filter' 
import TodoList from '../todo-list/todo-list'

class TodoListContainer extends Component {
  componentDidMount () {
    this.props.fetchTodos()
  }
  render () {
    const { todos, visibilityFilter, toggleTodo, deleteTodo, addTodo, selectTodo, selectedTodoId, setVisibilityFilter, isFetching, setPriority } = this.props
    return (
      <TodoList
        todos={todos}
        visibilityFilter={visibilityFilter}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        addTodo={addTodo}
        selectTodo={selectTodo}
        selectedTodoId={selectedTodoId}
        setVisibilityFilter={setVisibilityFilter}
        isFetching={isFetching}
        setPriority={setPriority}
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
      const todos = state.todos.todos
      const todosArray = Object.keys(todos).map(id => todos[id])
      return todosArray.filter(filters[state.visibilityFilter])
    })(),
    visibilityFilter: state.visibilityFilter,
    isFetching: state.todos.isFetching,
    selectedTodoId: state.todos.selectedTodoId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: index => dispatch(toggleTodo(index)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    addTodo: text => dispatch(addTodo(text)),
    setVisibilityFilter: visibilityFilter => dispatch(setVisibilityFilter(visibilityFilter)),
    fetchTodos: () => dispatch(fetchTodos()),
    selectTodo: id => dispatch(selectTodo(id)),
    setPriority: (id, priority) => dispatch(setPriority(id, priority))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
