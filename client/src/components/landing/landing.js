import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import getArrayFromMap from '../../utility/get-array-from-map'
import { Link } from 'react-router-dom'
import { Page, PageSection } from '../page/page'

class Landing extends Component {

  static propTypes = {
    remainingTodoItems: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired
  }

  render () {
    const { remainingTodoItems, firstName } = this.props

    return (
      <StyledLanding>
        <GreetingSection flex={4}>
          <Greeting>
            Hello {firstName},
          </Greeting>
          <TaskInfo>
            You have <RemainingTasksLink to="/all-todo-items">{remainingTodoItems} tasks</RemainingTasksLink> remaining.
          </TaskInfo>
        </GreetingSection>
        <ControlsSection flex={1}>
          <TaskListLink to="/todo-list">
            Task Lists 🠆
          </TaskListLink>
        </ControlsSection>
      </StyledLanding>
    )
  }
}

const mapStateToProps = state => {
  return {
    firstName: state.userReducer.firstName,
    remainingTodoItems: getArrayFromMap(state.todoItemsReducer).filter(todoItem => !todoItem.completed).length
  }
}

export default connect(mapStateToProps, null)(Landing)

const StyledLanding = styled(Page)`
  color: ${({ theme }) => theme.colors.main.color};
  background-image: ${({ theme }) => theme.colors.main.backgroundImage};
  padding: 3.5rem;
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
`
