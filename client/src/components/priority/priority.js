import React, { Component } from 'react'
import './priority.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { todosActions } from '../../redux/todo-items'

const priorities = [
  'low',
  'medium',
  'high'
]

class Priority extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  selectPriority (priority) {
    this.setState({ isOpen: !this.state.isOpen })
    this.props.setPriority(this.props.todo.id, priority)
  }
  render () {
    return (
      <div className="priority">
        <div className={`priority__selected priority__selection--${this.props.todo.priority}`} onClick={() => this.setState({ isOpen: !this.state.isOpen })} />
        { this.state.isOpen ? (
          <div className="priority__options">
            {priorities.map(priority => {
              if (priority === this.props.todo.priority) {
                return null
              } else {
                return (
                  <div
                    className={`priority__selection priority__selection--${priority}`}
                    onClick={() => this.selectPriority(priority)}
                    key={priority}
                  />
                )
              }
            })}
          </div>
        ) : null }
      </div>
    )
  }
}

Priority.propTypes = {
  todo: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    setPriority: (id, setPriority) => dispatch(todosActions.setPriority(id, setPriority))
  }
}

export default connect(null, mapDispatchToProps)(Priority)
