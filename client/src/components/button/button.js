import React from 'react'
import './button.css'
import PropTypes from 'prop-types'
import arrow from './icons/arrow.svg'
import close from './icons/close.svg'

const getIconImage = name => {
  return {
    arrow: arrow,
    close: close
  }[name]
}

const Button = props => {
  const { icon, altText, action, size } = props

  return (
    <img
      className={`button button--${size || 'medium'}`}
      alt={altText || 'A button'}
      src={getIconImage(icon)}
      onClick={action}
    />
  )
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string,
  action: PropTypes.func.isRequired,
  size: PropTypes.string
}

export default Button
