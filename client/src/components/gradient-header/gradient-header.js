import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class GradientHeader extends Component {

  static propTypes = {
    gradient: PropTypes.string.isRequired
  }

  render () {
    const { children } = this.props

    return (
      <StyledGradientHeader>
        {children}
      </StyledGradientHeader>
    )
  }
}

const StyledGradientHeader = styled.div`
  background-image: linear-gradient(to bottom, #405ea2, #4866a9, #4f6eaf, #5777b6, #5f7fbc);
  color: white !important;
`

export default GradientHeader
