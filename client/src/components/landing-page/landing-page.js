import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import getArrayFromMap from '../../utility/get-array-from-map'
import { Link } from 'react-router-dom'
import { Page, PageSection } from '../page/page'

class LandingPage extends Component {

  static propTypes = {
    firstName: PropTypes.string.isRequired,
    incompleteTodoItemsCount: PropTypes.number.isRequired
  }

  render () {
    const { incompleteTodoItemsCount, firstName } = this.props

    return (
      <StyledLanding>
        <GreetingSection flex={4}>
          <Greeting>
            Hello {firstName},
          </Greeting>
          <TaskInfo>
            You have <RemainingTasksLink to="/all-todo-items">{incompleteTodoItemsCount} tasks</RemainingTasksLink> remaining.
          </TaskInfo>
        </GreetingSection>
        <ControlsSection flex={1}>
          <TaskListLink to="/todo-list">
            Task Lists <TaskListLinkArrow />
          </TaskListLink>
        </ControlsSection>
      </StyledLanding>
    )
  }
}

const mapStateToProps = state => {
  const todoItems = getArrayFromMap(state.todoItemsReducer)
  const incompleteTodoItems = todoItems.filter(todoItem => !todoItem.completed)
  const incompleteTodoItemsCount = incompleteTodoItems.length
  const firstName = state.userReducer.firstName

  return {
    firstName,
    incompleteTodoItemsCount
  }
}

export default connect(mapStateToProps, null)(LandingPage)

const StyledLanding = styled(Page)`
  color: ${({ theme }) => theme.colors.main.color};
  background-image: ${({ theme }) => theme.colors.main.backgroundImage};
`

const Greeting = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
`

const TaskInfo = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.main.altColor};
`

const GreetingSection = styled(PageSection)`
  align-items: flex-start;
`

const ControlsSection = styled(PageSection)`
  align-items: flex-end;
  justify-content: flex-end;
`

const RemainingTasksLink = styled(Link)`
  color: inherit;
`

const TaskListLink = styled(Link)`
  font-size: 1.75rem;
  text-align: right;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.main.linkColor};
  display: flex;
  align-items: center;
`

const TaskListLinkArrow = styled.svg`
  mask: url('forward-arrow.svg');
  background-color: ${({ theme }) => theme.colors.main.linkColor};
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 0.3rem;
`
