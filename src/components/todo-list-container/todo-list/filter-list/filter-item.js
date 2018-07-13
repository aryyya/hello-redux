import React from 'react'
import PropTypes from 'prop-types'

import './filter-item.css'

const FilterItem = ({ name, active, setVisibilityFilter }) => {
  return (
    <li
      className="filter-item"
      onClick={setVisibilityFilter}
    >
      <input
        type="checkbox"
        readOnly
        checked={active}
      />
      {name}
    </li>
  )
}

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
}

export default FilterItem
