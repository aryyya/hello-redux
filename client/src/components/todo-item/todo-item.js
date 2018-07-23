import React from 'react'
import PropTypes from 'prop-types'
import './todo-item.css'
import Checkbox from '../checkbox/checkbox'
import Circle from '../circle/circle'
import TodoItemPanel from '../todo-item-panel/todo-item-panel'

const TodoItem = ({ completed, text, id, toggleTodo, deleteTodo, selectTodo, selectedTodoId, setPriority, priority }) => {
  return (
    <li className={`todo-item ${completed ? 'todo-item--completed' : ''} ${id === selectedTodoId ? 'todo-item--selected' : ''}`}>
      <div className="todo-item__top">
        <div className="todo-item__text-wrapper">
          <Circle
            priority={priority}
          />
          <span className="todo-item__text">{text}</span>
        </div>
        <div className="todo-item__buttons">
          <Checkbox
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <img
            className="todo-item__settings icon"
            src="settings-icon.svg"
            alt="Change todo item settings."
            onClick={() => selectTodo(id)}
          />
        </div>
      </div>
      {
        selectedTodoId === id
          ? <TodoItemPanel
              id={id}
              deleteTodo={deleteTodo}
              setPriority={setPriority}
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
  selectedTodoId: PropTypes.string.isRequired,
  setPriority: PropTypes.func.isRequired
}

export default TodoItem
