import React, { Component } from 'react'
import './todo-list-page.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TodoItem from '../todo-item/todo-item'
import { todosActions } from '../../redux/todo-items'
import styled from 'styled-components'
import { Page, PageSection } from '../page/page'
import mountains from '../../img/mountains.jpg'

class TodoListPage extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    todoList: PropTypes.object.isRequired,
    todoItems: PropTypes.array.isRequired,
    fetchTodoItems: PropTypes.func.isRequired
  }

  render () {
    const { history, todoList, todoItems } = this.props

    return (
      <TodoListPageStyled>
        <HeaderSection flex={2}>
          <HeaderContent>
            <HeaderLeft>
              <h1>{todoList.name}</h1>
            </HeaderLeft>
            <HeaderRight>
              <h2>hi</h2>
            </HeaderRight>
          </HeaderContent>
        </HeaderSection>
        <ItemsSection flex={3}>
          <ul className="todo-list-page__list">
            {todoItems.map(todo =>
              <TodoItem
              todoItem={todo}
              key={todo.id}
              />
            )}
          </ul>
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
  
  return {
    todoList,
    todoItems: todoItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTodoItems: () => dispatch(todosActions.fetchTodoItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage)

const TodoListPageStyled = styled(Page)``

const HeaderSection = styled(PageSection)`
  background-image: url(${mountains});
  background-size: cover;
  position: relative;
`

const HeaderContent = styled.div`
  background-color: rgba(0, 0, 255, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;

  > * {
    height: 100%;
  }
`

const HeaderLeft = styled.div`
  font-size: 2rem;
  h1 {font-weight: 300 !important;}
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
`

const HeaderRight = styled.div`
  flex: 1;
`

const ItemsSection = styled(PageSection)`
  justify-content: flex-start;
  align-items: flex-start;
`

const ControlsSection = styled(PageSection)``
