import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import getArrayFromMap from '../../utility/get-array-from-map'
import { Link } from 'react-router-dom'

class Landing extends Component {

  render () {
    const { remainingTodoItems } = this.props

    return (
      <StyledLanding>
        <StyledTopSection>
          <StyledGreeting>
            Hello Nancy.
          </StyledGreeting>
          <StyledTaskInfo>
            You have <StyledRemainingTasksLink to="/todo-list">{remainingTodoItems} tasks</StyledRemainingTasksLink> remaining.
          </StyledTaskInfo>
        </StyledTopSection>
        <StyledBottomSection>
          <StyledTaskListLink to="/todo-list">
            Task Lists 🠆
          </StyledTaskListLink>
        </StyledBottomSection>
      </StyledLanding>
    )
  }
}

const StyledLanding = styled.div`
  height: 100vh;
  color: ${({ theme }) => theme.colors.main.color};
  background-image: ${({ theme }) => theme.colors.main.backgroundImage};
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledGreeting = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
`

const StyledTaskInfo = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.main.altColor};
`

const StyledTopSection = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledBottomSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const StyledRemainingTasksLink = styled(Link)`
  color: inherit;
`

const StyledTaskListLink = styled(Link)`
  font-size: 1.75rem;
  text-align: right;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.main.linkColor};
`

const mapStateToProps = state => {
  return {
    remainingTodoItems: getArrayFromMap(state.todoItemsReducer.todoItems).filter(todoItem => !todoItem.completed).length
  }
}

export default connect(mapStateToProps, null)(Landing)
