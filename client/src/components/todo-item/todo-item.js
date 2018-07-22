import React from 'react'
import PropTypes from 'prop-types'
import './todo-item.css'
import Checkbox from '../checkbox/checkbox'
import TodoItemPanel from '../todo-item-panel/todo-item-panel'

const TodoItem = ({ completed, text, id, toggleTodo, deleteTodo, selectTodo, selectedTodoId }) => {
  return (
    <li className={`todo-item ${completed ? 'todo-item--completed' : ''}`}>
      <div className="todo-item__top">
        <span className="todo-item__text">{text}</span>
        <Checkbox
          checked={completed}
          onClick={() => toggleTodo(id)}
        />
        <img
          src="settings-icon.svg"
          width="20px"
          height="20px"
          onClick={() => selectTodo(id)}
        />
      </div>
      {
        selectedTodoId === id
          ? <TodoItemPanel
              id={id}
              deleteTodo={deleteTodo}
            />
          : null
      }
    </li>
  )
}

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  selectTodo: PropTypes.func.isRequired,
  selectedTodoId: PropTypes.string.isRequired
}

export default TodoItem
