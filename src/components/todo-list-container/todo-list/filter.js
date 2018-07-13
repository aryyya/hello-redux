import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { VisibilityFilters } from '../../../redux/actions/action-types'

const Filter = props => {
  const { visibilityFilter, setVisibilityFilter } = props
  return (
    <div className="filter">
      <div className="filter__option">
        Show all: <input type="checkbox" checked={visibilityFilter === VisibilityFilters.SHOW_ALL} readOnly onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_ALL)} />
      </div>
      <div className="filter__option">
        Show complete: <input type="checkbox" checked={visibilityFilter === VisibilityFilters.SHOW_COMPLETE} readOnly onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_COMPLETE)} />
      </div>
      <div className="filter__option">
        Show incomplete: <input type="checkbox" checked={visibilityFilter === VisibilityFilters.SHOW_INCOMPLETE} readOnly onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_INCOMPLETE)} />
      </div>
    </div>
  )
}

Filter.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
}

export default Filter
