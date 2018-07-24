import React from 'react'
import PropTypes from 'prop-types'
import './checkbox.css'

const Checkbox = props => {
  const { checked, onClick } = props
  return (
    <span
      className={`checkbox checkbox--${checked ? 'checked' : 'unchecked'}`}
      onClick={onClick}
    >
      ✓
    </span>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Checkbox
