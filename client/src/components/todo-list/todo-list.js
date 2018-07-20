import React from 'react'
import PropTypes from 'prop-types'
import './todo-list.css'
import FilterList from '../filter-list/filter-list'
import TodoInput from '../todo-input/todo-input'
import TodoItem from '../todo-item/todo-item'

const TodoList = ({ todos, toggleTodo, addTodo, visibilityFilter, setVisibilityFilter, isFetching }) => {
  return (
    <div className={`todo-list ${isFetching ? 'todo-list--loading' : ''}`}>
      <FilterList
        visibilityFilter={visibilityFilter}
        setVisibilityFilter={setVisibilityFilter}
      />
      <TodoInput onSubmit={addTodo} />
      <ul>
        {todos.map(todo =>
          <TodoItem
            completed={todo.completed}
            text={todo.text}
            id={todo.id}
            toggleTodo={toggleTodo}
            key={todo.text}
          />
        )}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default TodoList
