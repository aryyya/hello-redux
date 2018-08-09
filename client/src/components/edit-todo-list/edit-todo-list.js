import React, { Component } from 'react'
import './edit-todo-list.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { todoListsActions } from '../../redux/todo-lists';

class EditTodoList extends Component {

  constructor (props) {
    super(props)

    const { todoList } = props

    this.state = {
      name: todoList.name
    }
  }

  updateTodoList (event) {
    event.preventDefault()

    const { todoList, editTodoList, history } = this.props
    const { name } = this.state

    editTodoList(todoList.id, { name })

    history.push(`/todo-list/${todoList.id}`)
  }

  deleteTodoList () {
    const { todoList, deleteTodoList, history } = this.props

    deleteTodoList(todoList.id)

    history.push(`/todo-list`)
  }

  render () {
    const { state, updateTodoList } = this
    const { todoList } = this.props

    return (
      <form
        className="edit-todo-list"
        onSubmit={updateTodoList.bind(this)}
      >
        <div className="edit-todo-list__form-section">
          <input
            type="text"
            value={state.name}
            onChange={event => this.setState({ name: event.target.value })}
          />
        </div>
        <div className="edit-todo-list__form-section">
          <button onClick={this.deleteTodoList.bind(this)}>
            Delete Todo List
          </button>
        </div>
        <div className="edit-todo-list__form-section">
          <input
            type="submit"
            value="Update Todo List"
          />
        </div>
      </form>
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

const mapDispatchToProps = dispatch => {
  return {
    editTodoList: (todoListId, { name }) => dispatch(todoListsActions.editTodoList(todoListId, { name })),
    deleteTodoList: todoListId => dispatch(todoListsActions.deleteTodoList(todoListId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(
    EditTodoList
  )
)
