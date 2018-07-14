import React from 'react'
import PropTypes from 'prop-types'
import FilterList from '../filter-list/filter-list'
import TodoInput from '../todo-input/todo-input'
import TodoItem from '../todo-item/todo-item'

const TodoList = ({ todos, toggleTodo, addTodo, visibilityFilter, setVisibilityFilter }) => {
  return (
    <div>
      <FilterList
        visibilityFilter={visibilityFilter}
        setVisibilityFilter={setVisibilityFilter}
      />
      <TodoInput onSubmit={addTodo} />
      <ul>
        {todos.map((todo, index) =>
          <TodoItem
            completed={todo.completed}
            text={todo.text}
            index={index}
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
  setVisibilityFilter: PropTypes.func.isRequired
}

export default TodoList
