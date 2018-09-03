import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class CompletionDial extends Component {

  render () {
    return (
      <CompletionDialStyled>
        <Dial />
        <CompletionText>
          {65}% done
        </CompletionText>
      </CompletionDialStyled>
    )
  }
}

export default CompletionDial

const CompletionDialStyled = styled.div`
  display: flex;
`

const Dial = styled.div``

const CompletionText = styled.div``
