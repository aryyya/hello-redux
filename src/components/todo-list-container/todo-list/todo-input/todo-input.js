import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './todo-input.css'

class TodoInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  submit (event) {
    event.preventDefault()
    this.props.onSubmit(this.state.text)
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
  onSubmit: PropTypes.func.isRequired
}

export default TodoInput
