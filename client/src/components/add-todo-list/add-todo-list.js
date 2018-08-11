import React, { Component } from 'react'
import './add-todo-list.css'
import PropTypes from 'prop-types'

class AddTodoList extends Component {

  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <form className="add-todo-list">
        <div className="add-todo-list__section">
          <input
            type="text"
            placeholder="Enter list name here."
          />
        </div>
        <div className="add-todo-list__section">
          <input
            type="submit"
            value="Add Todo List"
          />
        </div>
      </form>
    )
  }
}

export default AddTodoList
