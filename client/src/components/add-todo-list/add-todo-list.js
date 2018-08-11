import React, { Component } from 'react'
import './add-todo-list.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { todoListsActions } from '../../redux/todo-lists';

class AddTodoList extends Component {

  constructor (props) {
    super(props)

    this.state = {
      name: '',
      waitingForRedirectToNewTodoList: false
    }
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    addTodoList: PropTypes.func.isRequired
  }

  addTodoList (event) {
    event.preventDefault()

    const { name } = this.state
    const { addTodoList } = this.props

    addTodoList(name)

    this.setState({ waitingForRedirectToNewTodoList: true })
  }
  
  componentDidUpdate () {
    const { waitingForRedirectToNewTodoList } = this.state
    const { newestTodoListId, history } = this.props

    if (waitingForRedirectToNewTodoList) {
      history.push(`/todo-list/${newestTodoListId}`)
    }
  }

  render () {
    return (
      <form
        className="add-todo-list"
        onSubmit={this.addTodoList.bind(this)}
      >
        <div className="add-todo-list__section">
          <input
            type="text"
            placeholder="Enter list name here."
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
          />
        </div>
        <div className="add-todo-list__section">
          <input
            type="submit"
            value="Add Todo List"
          />
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  const todoLists = Object.keys(state.todoListsReducer).map(todoListId => state.todoListsReducer[todoListId])

  return {
    newestTodoListId: todoLists.sort((todoListX, todoListY) => new Date(todoListX.createdAt) < new Date(todoListY.createdAt))[0].id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoList: name => dispatch(todoListsActions.addTodoList(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoList)
