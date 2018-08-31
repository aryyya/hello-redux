import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import getArrayFromMap from '../../utility/get-array-from-map'
import { Link } from 'react-router-dom'
import Page from '../page/page'

class Landing extends Component {

  static propTypes = {
    remainingTodoItems: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired
  }

  render () {
    const { remainingTodoItems, firstName } = this.props

    return (
      <StyledLanding>
        <StyledTopSection>
          <StyledGreeting>
            Hello {firstName},
          </StyledGreeting>
          <StyledTaskInfo>
            You have <StyledRemainingTasksLink to="/all-todo-items">{remainingTodoItems} tasks</StyledRemainingTasksLink> remaining.
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
