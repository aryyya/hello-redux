import React from 'react'
import PropTypes from 'prop-types'
import './todo-item.css'
import TodoItemPanel from '../todo-item-panel/todo-item-panel'

const TodoItem = ({ completed, text, id, toggleTodo, deleteTodo, selectTodo, selectedTodoId }) => {
  return (
    <li className={`todo-item ${completed ? 'todo-item--completed' : ''}`}>
      <div className="todo-item__top" onClick={() => selectTodo(id)}>
        <span className="todo-item__text">{text}</span>
        <input className="todo-item__check" type="checkbox" checked={completed} readOnly onClick={() => toggleTodo(id)} />
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
