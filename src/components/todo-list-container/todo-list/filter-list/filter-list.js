import React from 'react'
import PropTypes from 'prop-types'

import './filter-list.css'

import { VisibilityFilters } from '../../../../redux/actions/action-types'

import FilterItem from './filter-item'

const filters = [
  { name: 'Show all', visibilityFilter: VisibilityFilters.SHOW_ALL },
  { name: 'Show complete', visibilityFilter: VisibilityFilters.SHOW_COMPLETE },
  { name: 'Show incomplete', visibilityFilter: VisibilityFilters.SHOW_INCOMPLETE }
]

const Filter = ({ visibilityFilter, setVisibilityFilter }) => {
  return (
    <ul className="filter-list">
      {filters.map(filter => (
        <FilterItem
          name={filter.name}
          active={visibilityFilter === filter.visibilityFilter}
          setVisibilityFilter={() => setVisibilityFilter(filter.visibilityFilter)}
          key={filter.name}
        />
      ))}
    </ul>
  )
}

Filter.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
}

export default Filter
