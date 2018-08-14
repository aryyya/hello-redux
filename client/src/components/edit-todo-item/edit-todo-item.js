import React, { Component } from 'react'
import './edit-todo-item.css'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { todosActions } from '../../redux/todo-items'
import closeImage from '../../close-icon.svg'

class EditTodo extends Component {

  constructor (props) {
    super(props)

    const { todo } = this.props

    this.state = {
      text: todo.text,
      priority: todo.priority,
      completed: todo.completed
    }
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    todo: PropTypes.object.isRequired,
    editTodoItem: PropTypes.func.isRequired,
    deleteTodoItem: PropTypes.func.isRequired
  }

  onSubmit (event) {
    event.preventDefault()

    const { todoItemId, todoListId } = this.props.match.params
    const { text, priority, completed } = this.state
    const { editTodoItem, history } = this.props

    editTodoItem(todoItemId, {
      text,
      priority,
      completed
    })

    history.push(`/todo-list/${todoListId}`)
  }

  onDelete () {
    const { todoItemId, todoListId } = this.props.match.params
    const { deleteTodoItem, history } = this.props

    deleteTodoItem(todoItemId, todoListId)

    history.push(`/todo-list/${todoListId}`)
  }

  render () {
    const { state } = this
    const { todoListId } = this.props.match.params

    return (
      <div className="edit-todo-item">
        <form
          className="edit-todo-item__form"
          onSubmit={this.onSubmit.bind(this)}
        >
          <div>
            <div>
              <Link
                className="edit-todo-item__close"
                to={`/todo-list/${todoListId}`}
              >
                <img
                  className="edit-todo-item__close-icon"
                  src={closeImage}
                  alt="Close."
                />
              </Link>
            </div>
            <div>
              <input
                className="edit-todo-item__text"
                type="text"
                value={state.text}
                onChange={event => this.setState({ text: event.target.value })}
                autoFocus
              />
            </div>
            <div className="edit-todo-item__priorities">
              <div>
                <input
                  className="edit-todo-item__priority edit-todo-item__priority--low"
                  id="low-priority"
                  type="radio"
                  name="priority"
                  checked={state.priority === 'low'}
                  readOnly
                  onChange={() => this.setState({ priority: 'low' })}
                />
                <label htmlFor="low-priority">
                  Low priority
                </label>
              </div>
              <div>
                <input
                  className="edit-todo-item__priority edit-todo-item__priority--medium"
                  id="medium-priority"
                  type="radio"
                  name="priority"
                  checked={state.priority === 'medium'}
                  readOnly
                  onChange={() => this.setState({ priority: 'medium' })}
                />
                <label htmlFor="medium-priority">
                  Medium priority
                </label>
              </div>
              <div>
                <input
                  className="edit-todo-item__priority edit-todo-item__priority--high"
                  id="high-priority"
                  type="radio"
                  name="priority"
                  checked={state.priority === 'high'}
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
                className="edit-todo-item__completed"
                type="checkbox"
                name="completed"
                id="completed"
                checked={state.completed}
                onChange={() => this.setState({ completed: !state.completed })}
              />
              <label htmlFor="completed">
                Completed
              </label>
            </div>
            <div>
              <button
                className="edit-todo-item__delete"
                onClick={this.onDelete.bind(this)}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="edit-todo-item__buttons">
            <input
              className="edit-todo-item__edit-button"
              type="submit"
              value="Update Todo"
            />
        </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { todoItems } = state.todoItemsReducer
  const { todoItemId } = ownProps.match.params

  return {
    todo: todoItems[todoItemId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editTodoItem: (id, { text, completed, priority }) => dispatch(todosActions.editTodoItem(id, { text, completed, priority })),
    deleteTodoItem: (todoItemId, todoListId) => dispatch(todosActions.deleteTodoItem(todoItemId, todoListId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(
    EditTodo
  )
)
