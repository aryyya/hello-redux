import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import getArrayFromMap from '../../utility/get-array-from-map'

class Landing extends Component {

  render () {
    const { remainingTodoItems } = this.props

    return (
      <StyledLanding>
        <StyledGreeting>
          Hello Nancy
        </StyledGreeting>
        <StyledTaskInfo>
          You have {remainingTodoItems} tasks to complete.
        </StyledTaskInfo>
      </StyledLanding>
    )
  }
}

const StyledLanding = styled.div`
  height: 100vh;
  color: ${({ theme }) => theme.colors.main.color};
  background-image: ${({ theme }) => theme.colors.main.backgroundImage};
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledGreeting = styled.h1`
  font-size: 4rem;
  font-weight: 300;
`

const StyledTaskInfo = styled.h2`
  font-size: 2rem;
  font-weight: 300;
`

const mapStateToProps = state => {
  return {
    remainingTodoItems: getArrayFromMap(state.todoItemsReducer.todoItems).filter(todoItem => !todoItem.completed).length
  }
}

export default connect(mapStateToProps, null)(Landing)
