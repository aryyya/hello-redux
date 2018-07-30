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
    this.props.editTodo(this.props.match.params.id, { text: this.state.text })
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
        <input type="radio" name="priority" id="low" />
        <input type="radio" name="priority" id="medium" />
        <input type="radio" name="priority" id="high" />
        <input type="submit" value="edit" />
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
    editTodo: (id, { text }) => dispatch(todosActions.editTodo(id, { text }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(
    EditTodo
  )
)

