import React, { Component } from 'react'
import './edit-todo.css'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { todosActions } from '../../redux/todos'

class EditTodo extends Component {
  constructor (props) {
    super(props)
    const todo = this.props.todos[this.props.match.params.id]
    this.state = {
      text: todo.text,
      priority: todo.priority,
      completed: todo.completed
    }
  }
  onSubmit (event) {
    event.preventDefault()
    this.props.editTodo(this.props.match.params.id, {
      text: this.state.text,
      priority: this.state.priority,
      completed: this.state.completed
    })
    this.props.history.push('/')
  }
  render () {
    return (
      <form
        className="edit-todo"
        onSubmit={this.onSubmit.bind(this)}
      >
        <p>You are at: {this.props.match.params.id}</p>
        <input
          type="text"
          value={this.state.text}
          onChange={event => this.setState({ text: event.target.value })}
          autoFocus
        />
        low: 
        <input
          type="radio"
          name="priority"
          id="low"
          checked={this.state.priority === 'low'}
          onChange={() => this.setState({ priority: 'low' })}
        />
        medium: 
        <input
          type="radio"
          name="priority"
          id="medium"
          checked={this.state.priority === 'medium'}
          onChange={() => this.setState({ priority: 'medium' })}
        />
        high: 
        <input
          type="radio"
          name="priority"
          id="high"
          checked={this.state.priority === 'high'}
          onChange={() => this.setState({ priority: 'high' })}
        />
        completed: 
        <input
          type="checkbox"
          name="completed"
          id="completed"
          checked={this.state.completed}
          onChange={() => this.setState({ completed: !this.state.completed })}
        />
        <input
          type="submit"
          value="edit"
        />
      </form>
    )
  }
}

EditTodo.propTypes = {
  todos: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editTodo: (id, { text, completed, priority }) => dispatch(todosActions.editTodo(id, { text, completed, priority }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(
    EditTodo
  )
)

