import React, { Component } from 'react'
import './priority.css'
import PropTypes from 'prop-types'

class Priority extends Component {

  static propTypes = {
    priority: PropTypes.string.isRequired
  }

  render () {
    const { priority } = this.props

    return (
      <div className="priority">
        <div className={`priority__selected priority__selection--${priority}`} />
      </div>
    )
  }
}

export default Priority
