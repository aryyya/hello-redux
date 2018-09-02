import React, { Component } from 'react'
import styled from 'styled-components'
import { Page, PageSection } from '../page/page'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TodoList from '../todo-list/todo-list'

class TodoListsPage extends Component {

  static propTypes = {
    todoLists: PropTypes.array.isRequired
  }

  render () {
    const { todoLists } = this.props

    return (
      <StyledTodoLists>
        <TopControlsSection flex={1}>
          <ExitLink to="/">
            <ExitLinkIcon />
          </ExitLink>
        </TopControlsSection>
        <TodoListsSection flex={3}>
          <TodoLists>
            {todoLists.map(todoList =>
              <TodoList
                todoList={todoList}
                key={todoList.id}
              />
            )}
          </TodoLists>
        </TodoListsSection>
        <BottomControlsSection flex={1}>
          <Link
            className="todo-list__add-button"
            to="/add-todo-list"
          >
            +
          </Link>
        </BottomControlsSection>
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

export default connect(mapStateToProps, null)(TodoListsPage)

const StyledTodoLists = styled(Page)`
  animation: slide-in-from-left 0.3s ease;
  color: ${({ theme }) => theme.colors.main.color};
  background-image: ${({ theme }) => theme.colors.main.backgroundImage};
`

const TodoListsSection = styled(PageSection)``

const TodoLists = styled.ul`
  width: 100%;
`

const ExitLink = styled(Link)``

const ExitLinkIcon = styled.svg`
  mask: url('x.svg');
  background-color: ${({ theme }) => theme.colors.main.linkColor};
  width: 3.5rem;
  height: 3.5rem;
`

const TopControlsSection = styled(PageSection)`
  align-items: flex-start;
  justify-content: flex-start;
`

const BottomControlsSection = styled(PageSection)``
