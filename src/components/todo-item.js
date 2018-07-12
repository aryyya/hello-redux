import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  render () {
    const { isComplete, text } = this.props
    return (
      <div className="todo-item" style={{ display: 'flex' }} onClick={() => this.props.onClick()}>
        <input className="todo-item__checkbox" type="checkbox" checked={isComplete} readOnly />
        <div className="todo-item__text" style={{ textDecoration: isComplete ? 'line-through' : 'none' }}>{text}</div>
      </div>
    )
  }
}

TodoItem.propTypes = {
  isComplete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default TodoItem
