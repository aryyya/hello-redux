import React from 'react'
import PropTypes from 'prop-types'

import Filter from './filter-list/filter-list'
import TodoItem from './todo-item'

const TodoList = ({ todos, toggleTodo, visibilityFilter, setVisibilityFilter }) => {
  return (
    <div>
      <Filter
        visibilityFilter={visibilityFilter}
        setVisibilityFilter={setVisibilityFilter} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            completed={todo.completed}
            text={todo.text}
            index={index}
            toggleTodo={toggleTodo}
            key={todo.text} />
        ))}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
}

export default TodoList