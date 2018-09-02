import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import TodoItem from '../todo-item/todo-item'
import getArrayFromMap from '../../utility/get-array-from-map'
import { Page } from '../page/page'

class AllTodoItemsPage extends Component {

  static propTypes = {
    incompleteTodoItems: PropTypes.array.isRequired
  }

  render () {
    const { incompleteTodoItems } = this.props

    return (
      <AllTodoItemsStyled>
        AllTodoItemsPage component
        <TodoItemsStyled>
          {incompleteTodoItems.map(todoItem => <TodoItem todoItem={todoItem} key={todoItem.id} />)}
        </TodoItemsStyled>
      </AllTodoItemsStyled>
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

export default connect(mapStateToProps, null)(AllTodoItemsPage)

const AllTodoItemsStyled = styled(Page)``

const TodoItemsStyled = styled.ul``
