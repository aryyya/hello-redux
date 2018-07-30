import React, { Component } from 'react'
import './edit-todo.css'

class EditTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: null,
      priority: null,
      complete: null
    }
  }
  render () {
    return (
      <form className="edit-todo">
        <input type="text" />
        <input type="radio" name="priority" id="low" />
        <input type="radio" name="priority" id="medium" />
        <input type="radio" name="priority" id="high" />
        <input type="submit" value="edit" />
      </form>
    )
  }
}

export default EditTodo
