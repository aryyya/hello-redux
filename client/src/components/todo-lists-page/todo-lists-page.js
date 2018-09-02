import React, { Component } from 'react'
import styled from 'styled-components'
import { Page, PageSection } from '../page/page'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TodoList from '../todo-list/todo-list'
import x from '../../svg/x.svg'
import add from '../../svg/add.svg'

class TodoListsPage extends Component {

  static propTypes = {
    todoLists: PropTypes.array.isRequired
  }

  render () {
    const { todoLists } = this.props

    return (
      <TodoListsStyled>
        <TopControlsSection flex={1}>
          <ExitLink to="/">
            <ExitLinkIcon />
          </ExitLink>
        </TopControlsSection>
        <TodoListsSection flex={6}>
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
          <SettingsLink to="/">
            Settings
          </SettingsLink>
          <AddLink to="/add-todo-list">
            <AddLinkIcon />
          </AddLink>
        </BottomControlsSection>
      </TodoListsStyled>
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

const TodoListsStyled = styled(Page)`
  animation: slide-in-from-left 0.3s ease;
  color: ${({ theme }) => theme.colors.main.color};
  background-image: ${({ theme }) => theme.colors.main.backgroundImage};
`

const TodoListsSection = styled(PageSection)`
  overflow-y: scroll;
`

const TodoLists = styled.ul`
  width: 100%;
`

const ExitLink = styled(Link)``

const ExitLinkIcon = styled.svg`
  mask: url(${x});
  background-color: ${({ theme }) => theme.colors.main.linkColor};
  width: 3.5rem;
  height: 3.5rem;
`

const TopControlsSection = styled(PageSection)`
  align-items: flex-start;
  justify-content: flex-start;
`

const BottomControlsSection = styled(PageSection)``

const SettingsLink = styled(Link)`
  position: absolute;
  left: 0;
  color: ${({ theme }) => theme.colors.main.altColor};
  text-decoration: none;
  font-size: 3rem;
  font-weight: 300;
  margin-left: 3.5rem;
`

const AddLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.main.linkColor};
  position: absolute;
  right: 0;
  bottom: 0;
  width: 12rem;
  height: 12rem;
  clip-path: polygon(
    100% 0%,
    100% 0%,
    100% 100%,
    0% 100%
  );
`

const AddLinkIcon = styled.svg`
  mask: url(${add});
  background-color: ${({ theme }) => theme.colors.main.backgroundColor};
  width: 3.5rem;
  height: 3.5rem;
  bottom: 1.7rem;
  right: 1.7rem;
  position: absolute;
`
