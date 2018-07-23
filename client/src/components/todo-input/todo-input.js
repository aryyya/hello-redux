import React, { Component } from 'react'
import './todo-input.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as todosActions from '../../redux/todos'

class TodoInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  submit (event) {
    event.preventDefault()
    this.props.addTodo(this.state.text)
    this.setState({ text: '' })
  }
  render () {
    return (
      <form className="todo-input" onSubmit={this.submit.bind(this)}>
        <input type="text" placeholder="What do you need to do?" value={this.state.text} onChange={event => this.setState({ text: event.target.value })} />
        <input type="submit" value="Add item" />
      </form>
    )
  }
}

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(todosActions.addTodo(text))
  }
}

export default connect(null, mapDispatchToProps)(TodoInput)
