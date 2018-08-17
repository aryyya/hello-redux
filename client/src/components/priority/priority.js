import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const getDotBackgroundColor = priority => ({
  'low': '#47e4c2',
  'medium': '#fcc300',
  'high': '#ff88a6'
}[priority])

const StyledPriority = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${({ priority }) => getDotBackgroundColor(priority)};
`

class Priority extends Component {

  static propTypes = {
    priority: PropTypes.string.isRequired
  }

  render () {
    const { priority } = this.props

    return (
      <StyledPriority priority={priority} />
    )
  }
}

export default Priority
