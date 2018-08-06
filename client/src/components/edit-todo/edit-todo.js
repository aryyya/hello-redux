import React, { Component } from 'react'
import './edit-todo.css'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { todosActions } from '../../redux/todos'

class EditTodo extends Component {
  constructor (props) {
    super(props)
    const todo = this.props.todos[this.props.match.params.todoItemId]
    this.state = {
      text: todo.text,
      priority: todo.priority,
      completed: todo.completed
    }

    const { todoItemId } = this.props.match.params
    console.log(todoItemId)
  }
  onSubmit (event) {
    event.preventDefault()
    this.props.editTodo(this.props.match.params.todoItemId, {
      text: this.state.text,
      priority: this.state.priority,
      completed: this.state.completed
    })
    this.props.history.push('/todo-list/1')
  }
  onDelete () {
    this.props.deleteTodo(this.props.match.params.id)
    this.props.history.push('/todo-list/1')
  }
  render () {
    return (
      <div className="edit-todo">
        <form
          className="edit-todo__form"
          onSubmit={this.onSubmit.bind(this)}
        >
          <div>
            <div>
              <Link
                className="edit-todo__close"
                to="/todo-list/1"
              >
                <img
                  className="edit-todo__close-icon"
                  src="../close-icon.svg"
                  alt="Close."
                />
              </Link>
            </div>
            <div>
              <input
                className="edit-todo__text"
                type="text"
                value={this.state.text}
                onChange={event => this.setState({ text: event.target.value })}
                autoFocus
              />
            </div>
            <div className="edit-todo__priorities">
              <div>
                <input
                  className="edit-todo__priority edit-todo__priority--low"
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
                  className="edit-todo__priority edit-todo__priority--medium"
                  id="medium-priority"
                  type="radio"
                  name="priority"
                  checked={this.state.priority === 'low'}
                  readOnly
                  onChange={() => this.setState({ priority: 'medium' })}
                />
                <label htmlFor="medium-priority">
                  Medium priority
                </label>
              </div>
              <div>
                <input
                  className="edit-todo__priority edit-todo__priority--high"
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
            <div>
              <input
                className="edit-todo__completed"
                type="checkbox"
                name="completed"
                id="completed"
                checked={this.state.completed}
                onChange={() => this.setState({ completed: !this.state.completed })}
              />
              <label htmlFor="completed">
                Completed
              </label>
            </div>
            <div>
              <button
                className="edit-todo__delete"
                onClick={this.onDelete.bind(this)}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="edit-todo__buttons">
            <input
              className="edit-todo__edit-button"
              type="submit"
              value="Update Todo"
            />
        </div>
        </form>
      </div>
    )
  }
}

EditTodo.propTypes = {
  todos: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editTodo: (id, { text, completed, priority }) => dispatch(todosActions.editTodo(id, { text, completed, priority })),
    deleteTodo: id => dispatch(todosActions.deleteTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(
    EditTodo
  )
)

