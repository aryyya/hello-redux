import React, { Component } from 'react'
import './add-todo-item-page.css'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { todosActions } from '../../redux/todo-items'
import Button from '../button/button'

class AddTodoItemPage extends Component {

  constructor (props) {
    super(props)

    this.state = {
      text: '',
      priority: 'low'
    }
  }
  
  static propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    addTodoItem: PropTypes.func.isRequired
  }

  addTodoItem (event) {
    if (event) {
      event.preventDefault()
    }

    const { addTodoItem, history } = this.props
    const { todoListId } = this.props.match.params
    const { text, priority } = this.state

    addTodoItem(todoListId, text, priority)

    history.push(`/todo-list/${todoListId}`)
  }

  render () {
    const { history } = this.props
    const { todoListId } = this.props.match.params
    const { state } = this

    return (
      <div className="add-todo-item-page">
        <form
          className="add-todo-item-page__form"
          onSubmit={this.addTodoItem.bind(this)}
        >
          <div>
            <Button
              icon="close"
              action={() => history.push(`/todo-list/${todoListId}`)}
            />
          </div>
          <div>
            <input
              className="add-todo-item-page__text"
              autoFocus
              type="text"
              value={state.text}
              onChange={event => this.setState({ text: event.target.value })}
              placeholder="Write task here."
            />
          </div>
          <div className="add-todo-item-page__priorities">
            <div>
              <input
                className="add-todo-item-page__priority .add-todo-item-page__priority--low"
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
                className="add-todo-item-page__priority .add-todo-item-page__priority--medium"
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
                className="add-todo-item-page__priority .add-todo-item-page__priority--high"
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
        </form>
        <div className="add-todo-item-page__buttons">
          <div
            className="add-todo-item-page__add-button"
            onClick={this.addTodoItem.bind(this)}
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
    addTodoItem: (todoListId, text, priority) => dispatch(todosActions.addTodoItem(todoListId, text, priority)),
  }
}

export default connect(null, mapDispatchToProps)(
  withRouter(
    AddTodoItemPage
  )
)
