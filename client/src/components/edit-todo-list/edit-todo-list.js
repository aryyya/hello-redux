import React, { Component } from 'react'
import './edit-todo-list.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class EditTodoList extends Component {
  render () {
    return (
      <div className="edit-todo-list">
        {this.props.todoList.name}
      </div>
    )
  }
}

EditTodoList.propTypes = {
  match: PropTypes.object.isRequired,
  todoList: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  const { todoListId } = ownProps.match.params
  return {
    todoList: state.todoListsReducer[todoListId]
  }
}

export default connect(mapStateToProps, null)(
  withRouter(
    EditTodoList
  )
)
