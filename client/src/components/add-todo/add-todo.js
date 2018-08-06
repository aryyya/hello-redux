import React, { Component } from 'react'
import './add-todo.css'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { todosActions } from '../../redux/todos';

class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      priority: 'low'
    }
  }
  addTodo (event) {
    if (event) {
      event.preventDefault()
    }
    const { todoListId } = this.props.match.params
    this.props.addTodo(todoListId, this.state.text, this.state.priority)
    this.props.history.push(`/todo-list/${todoListId}`)
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
              to="/todo-list/1"
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
              placeholder="Write task here."
            />
          </div>
          <div className="add-todo__priorities">
            <div>
              <input
                className="add-todo__priority add-todo__priority--low"
                id="low-priority"
                type="radio"
                name="priority"
                checked={this.state.priority === 'low'}
                readOnly
                onChange={() => this.setState({ priority: 'low' })}
              />
              <label htmlFor="low-priority">
                Low priority
              </label>
            </div>
            <div>
              <input
                className="add-todo__priority add-todo__priority--medium"
                id="medium-priority"
                type="radio"
                name="priority"
                checked={this.state.priority === 'medium'}
                readOnly
                onChange={() => this.setState({ priority: 'medium' })}
              />
              <label htmlFor="medium-priority">
                Medium priority
              </label>
            </div>
            <div>
              <input
                className="add-todo__priority add-todo__priority--high"
                id="high-priority"
                type="radio"
                name="priority"
                checked={this.state.priority === 'high'}
                readOnly
                onChange={() => this.setState({ priority: 'high' })}
              />
              <label htmlFor="high-priority">
                High priority
              </label>
            </div>
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

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todoListId, text, priority) => dispatch(todosActions.addTodo(todoListId, text, priority)),
  }
}

export default connect(null, mapDispatchToProps)(
  withRouter(
    AddTodo
  )
)
