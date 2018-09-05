import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProgressRing from '../progress-ring/progress-ring'

class CompletionRing extends Component {

  static propTypes = {
    progress: PropTypes.number.isRequired
  }

  render () {
    const { progress } = this.props

    return (
      <CompletionRingStyled>
        <ProgressRing radius={20} stroke={5} progress={progress} />
        <Text>{progress}% done</Text>
      </CompletionRingStyled>
    )
  }
}

export default CompletionRing

const CompletionRingStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 0.5rem;
  width: 100%;
`

const Text = styled.div`
  font-size: 1rem;
  font-weight: 300;
  opacity: 0.9;
`
