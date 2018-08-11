import React, { Component } from 'react'
import './add-todo-list.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { todoListsActions } from '../../redux/todo-lists';

class AddTodoList extends Component {

  constructor (props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  static propTypes = {}

  addTodoList (event) {
    event.preventDefault()

    const { name } = this.state
    const { addTodoList } = this.props

    addTodoList(name)
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

const mapDispatchToProps = dispatch => {
  return {
    addTodoList: name => dispatch(todoListsActions.addTodoList(name))
  }
}

export default connect(null, mapDispatchToProps)(AddTodoList)
