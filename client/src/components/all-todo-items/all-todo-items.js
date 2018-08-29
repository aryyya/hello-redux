import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import TodoItem from '../todo-item/todo-item'
import getArrayFromMap from '../../utility/get-array-from-map';

class AllTodoItems extends Component {

  static propTypes = {
    incompleteTodoItems: PropTypes.array.isRequired
  }

  render () {
    const { incompleteTodoItems } = this.props

    return (
      <StyledAllTodoItems>
        AllTodoItems component
        <StyledAllTodoItemsTodoItems>
          {incompleteTodoItems.map(todoItem => <TodoItem todoItem={todoItem} key={todoItem.id} />)}
        </StyledAllTodoItemsTodoItems>
      </StyledAllTodoItems>
    )
  }
}

const mapStateToProps = state => {
  const todoItems = getArrayFromMap(state.todoItemsReducer)
  const incompleteTodoItems = todoItems.filter(todoItem => !todoItem.completed)

  return {
    incompleteTodoItems
  }
}

export default connect(mapStateToProps, null)(AllTodoItems)

const StyledAllTodoItems = styled.div``

const StyledAllTodoItemsTodoItems = styled.ul``
