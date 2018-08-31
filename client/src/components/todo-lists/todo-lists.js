import React, { Component } from 'react'
// import './todo-lists.css'
import styled from 'styled-components'
import { Page, PageSection } from '../page/page'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class TodoLists extends Component {

  static propTypes = {
    todoLists: PropTypes.array.isRequired
  }

  render () {
    const { todoLists } = this.props

    return (
      <StyledTodoLists>
        <TodoListsSection flex={4}>
          {todoLists.map(todoList => (
            <div key={todoList.id}>
              <Link to={`/todo-list/${todoList.id}`}>
                {todoList.name} ({todoList.todoItems.length} items)
              </Link>
              <br />
            </div>
          ))}
        </TodoListsSection>
        <ControlsSection flex={1}>
          <Link
            className="todo-list__add-button"
            to="/add-todo-list"
            >
            +
          </Link>
        </ControlsSection>
      </StyledTodoLists>
    )
  }
}

const mapStateToProps = state => {
  const { todoListsReducer } = state

  return {
    todoLists: (() => {
      return Object.keys(todoListsReducer).map(todoListId => todoListsReducer[todoListId])
    })()
  }
}

export default connect(mapStateToProps, null)(TodoLists)

const StyledTodoLists = styled(Page)`
  animation: slide-in-from-left 0.3s ease;
`

const TodoListsSection = styled(PageSection)``

const ControlsSection = styled(PageSection)``
