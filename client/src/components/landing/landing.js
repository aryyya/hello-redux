import React, { Component } from 'react'
import styled from 'styled-components'

class Landing extends Component {

  render () {
    return (
      <StyledLanding>
        <StyledGreeting>
          Hello Nancy
        </StyledGreeting>
        <StyledTaskInfo>
          You have 7 tasks to complete.
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

export default Landing
