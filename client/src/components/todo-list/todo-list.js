import React, { Component } from 'react'
import './todo-list.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FilterList from '../filter-list/filter-list'
import TodoInput from '../todo-input/todo-input'
import TodoItem from '../todo-item/todo-item'
import { VisibilityFilters } from '../../redux/visibility-filter'
import { todosActions } from '../../redux/todos'

class TodoList extends Component {
  componentDidMount () {
    this.props.fetchTodos()
  }
  render () {
    const props = this.props
    return (
      <div className={`todo-list ${props.isFetching ? 'todo-list--loading' : ''}`}>
        <div className="todo-list__title-section">
          <h1 className="todo-list__title">Task List.</h1>
          <h2 className="todo-list__subtitle">{new Date().toDateString()}</h2>
        </div>
        <div className="todo-list__todos-section">
          {/* <FilterList
            visibilityFilter={props.visibilityFilter}
          /> */}
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
          <div className="todo-list__add-button">
            +
          </div>
        </div>
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchTodos: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    todos: (() => {
      const filters = {
        [VisibilityFilters.SHOW_ALL]: todo => todo,
        [VisibilityFilters.SHOW_COMPLETE]: todo => todo.completed,
        [VisibilityFilters.SHOW_INCOMPLETE]: todo => !todo.completed
      }
      const todosArray = Object.keys(state.todosReducer.todos).map(id => state.todosReducer.todos[id])
      return todosArray.filter(filters[state.visibilityFilterReducer])
    })(),
    visibilityFilter: state.visibilityFilterReducer,
    isFetching: state.todosReducer.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: () => dispatch(todosActions.fetchTodos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
