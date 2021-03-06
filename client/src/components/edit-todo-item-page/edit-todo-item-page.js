import React, { Component } from 'react'
import './edit-todo-item-page.css'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { todosActions } from '../../redux/todo-items'
import closeImage from '../../close-icon.svg'

class EditTodoItemPage extends Component {

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
      <div className="edit-todo-item-page">
        <form
          className="edit-todo-item-page__form"
          onSubmit={this.onSubmit.bind(this)}
        >
          <div>
            <div>
              <Link
                className="edit-todo-item-page__close"
                to={`/todo-list/${todoListId}`}
              >
                <img
                  className="edit-todo-item-page__close-icon"
                  src={closeImage}
                  alt="Close."
                />
              </Link>
            </div>
            <div>
              <input
                className="edit-todo-item-page__text"
                type="text"
                value={state.text}
                onChange={event => this.setState({ text: event.target.value })}
                autoFocus
              />
            </div>
            <div className="edit-todo-item-page__priorities">
              <div>
                <input
                  className="edit-todo-item-page__priority edit-todo-item-page__priority--low"
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
                  className="edit-todo-item-page__priority edit-todo-item-page__priority--medium"
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
                  className="edit-todo-item-page__priority edit-todo-item-page__priority--high"
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
                className="edit-todo-item-page__completed"
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
                className="edit-todo-item-page__delete"
                onClick={this.onDelete.bind(this)}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="edit-todo-item-page__buttons">
            <input
              className="edit-todo-item-page__edit-button"
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
  const { todoItemId } = ownProps.match.params
  const todoItems = state.todoItemsReducer

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
    EditTodoItemPage
  )
)
