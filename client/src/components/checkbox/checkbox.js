import React, { Component } from 'react'
import './checkbox.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { todosActions } from '../../redux/todo-items'

class Checkbox extends Component {
  onClick (event) {
    event.stopPropagation()
    this.props.toggleTodo(this.props.todo.id)
  }
  render () {
    return (
      <span
        className={`checkbox checkbox--${this.props.todo.completed ? 'checked' : 'unchecked'}`}
        onClick={this.onClick.bind(this)}
      >
        ✓
      </span>
    )
  }
}

Checkbox.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(todosActions.toggleTodo(id))
  }
}

export default connect(null, mapDispatchToProps)(Checkbox)
