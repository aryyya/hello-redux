import React from 'react'
import './circle.css'
import PropTypes from 'prop-types'

const Circle = props => {
  const { priority } = props
  return (
    <span
      className={`circle circle--${priority}`}
    />
  )
}

Circle.propTypes = {
  priority: PropTypes.string.isRequired
}

export default Circle
