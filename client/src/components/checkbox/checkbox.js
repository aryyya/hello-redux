import React, { Component } from 'react'
import './checkbox.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { todosActions } from '../../redux/todo-items'

class Checkbox extends Component {

  static propTypes = {
    todo: PropTypes.object.isRequired,
    toggleTodoItem: PropTypes.func.isRequired
  }

  onClick (event) {
    event.stopPropagation()

    const { todo, toggleTodoItem } = this.props

    toggleTodoItem(todo.id)
  }

  render () {
    const { todo } = this.props
    
    return (
      <span
        className={`checkbox checkbox--${todo.completed ? 'checked' : 'unchecked'}`}
        onClick={this.onClick.bind(this)}
      >
        ✓
      </span>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodoItem: id => dispatch(todosActions.toggleTodoItem(id))
  }
}

export default connect(null, mapDispatchToProps)(Checkbox)
