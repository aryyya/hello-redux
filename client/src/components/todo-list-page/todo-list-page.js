import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TodoItem from '../todo-item/todo-item'
import { todosActions } from '../../redux/todo-items'
import styled from 'styled-components'
import { Page, PageSection } from '../page/page'
import TodoListPageHeader from '../todo-list-page-header/todo-list-page-header'

class TodoListPage extends Component {

  static propTypes = {
    todoList: PropTypes.object.isRequired,
    todoItems: PropTypes.array.isRequired,
    fetchTodoItems: PropTypes.func.isRequired,
    completedItems: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired
  }

  render () {
    const { todoList, todoItems, completedItems, totalItems } = this.props

    return (
      <TodoListPageStyled>
        <TodoListPageHeader
          flex={3}
          todoList={todoList}
          completedItems={completedItems}
          totalItems={totalItems}
        />
        <ItemsSection flex={5}>
          <Items>
            {todoItems.map(todo =>
              <TodoItem
              todoItem={todo}
              key={todo.id}
              />
            )}
          </Items>
        </ItemsSection>
        <ControlsSection flex={1}>
          <Link
            className="todo-list-page__add-button"
            to={`/todo-list/${todoList.id}/add-todo-item`}
          >
            +
          </Link>
        </ControlsSection>
      </TodoListPageStyled>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { todoListId } = ownProps.match.params
  const todoList = state.todoListsReducer[todoListId]
  const todoItems = todoList.todoItems.map(todoItemId => state.todoItemsReducer[todoItemId])
  const completedItems = todoItems.filter(todoItem => todoItem.completed).length
  const totalItems = todoItems.length
  
  return {
    todoList,
    todoItems,
    completedItems,
    totalItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTodoItems: () => dispatch(todosActions.fetchTodoItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage)

const TodoListPageStyled = styled(Page)``

const ItemsSection = styled(PageSection)`
  justify-content: flex-start;
`

const Items = styled.ul`
  width: 100%;
  height: 100%;
`

const ControlsSection = styled(PageSection)``
