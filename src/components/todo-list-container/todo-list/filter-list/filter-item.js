import React from 'react'
import PropTypes from 'prop-types'

import './filter-item.css'

const FilterItem = ({ name, currentVisibilityFilter, visibilityFilter, setVisibilityFilter }) => {
  return (
    <li
      className="filter-item"
      onClick={() => setVisibilityFilter(visibilityFilter)}
    >
      <input
        type="checkbox"
        readOnly
        checked={visibilityFilter === currentVisibilityFilter}
      />
      {name}
    </li>
  )
}

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
  currentVisibilityFilter: PropTypes.string.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
}

export default FilterItem
