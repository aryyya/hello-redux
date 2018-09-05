import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class ProgressRing extends Component {

  static propTypes = {
    radius: PropTypes.number.isRequired,
    stroke: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired
  }

  constructor (props) {
    super(props)
    
    const { radius, stroke } = this.props;
    
    this.normalizedRadius = radius - stroke * 2
    this.circumference = this.normalizedRadius * 2 * Math.PI
  }
  
  render () {
    const { radius, stroke, progress } = this.props
    const strokeDashoffset = this.circumference - progress / 100 * this.circumference
  
    return (
      <svg height={radius * 2} width={radius * 2}>
        <Circle
          stroke="white"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={this.circumference + ' ' + this.circumference}
          style={{strokeDashoffset}}
          r={this.normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
    )
  }
}

export default ProgressRing

const Circle = styled.circle`
  transition: stroke-dashoffset 0.6s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`
