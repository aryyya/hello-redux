import React, { Component } from 'react'
import './add-todo.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { todosActions } from '../../redux/todos';

class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  addTodo (event) {
    if (event) {
      event.preventDefault()
    }
    this.props.addTodo(this.state.text)
    this.props.history.push('/')
  }
  render () {
    return (
      <div className="add-todo">
        <form
          className="add-todo__form"
          onSubmit={this.addTodo.bind(this)}
        >
          <div>
            <Link
              className="add-todo__close"
              to="/"
            >
              <img
                className="add-todo__close-icon"
                src="close-icon.svg"
                alt="Close."
              />
            </Link>
          </div>
          <div>
            <input
              className="add-todo__text"
              autoFocus
              type="text"
              value={this.state.text}
              onChange={event => this.setState({ text: event.target.value })}
              placeholder="Write task here"
            />
          </div>
        </form>
        <div className="add-todo__buttons">
          <div
            className="add-todo__add-button"
            onClick={this.addTodo.bind(this)}
          >
            Add Todo
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => todosActions.addTodo(text)
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)
