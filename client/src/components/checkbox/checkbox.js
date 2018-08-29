import React, { Component } from 'react'
import './checkbox.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { todosActions } from '../../redux/todo-items'
import classNames from 'classnames'

class Checkbox extends Component {

  static propTypes = {
    todoItem: PropTypes.object.isRequired,
    toggleTodoItem: PropTypes.func.isRequired
  }

  onClick (event) {
    event.stopPropagation()

    const { todoItem, toggleTodoItem } = this.props

    toggleTodoItem(todoItem.id)
  }

  render () {
    const { todoItem } = this.props
    
    return (
      <span
        className={classNames('checkbox', { 'checkbox--checked': todoItem.completed })}
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
