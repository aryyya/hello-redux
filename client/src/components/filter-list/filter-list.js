import React from 'react'
import './filter-list.css'
import { VisibilityFilters } from '../../redux/visibility-filter'
import FilterItem from '../filter-item/filter-item'

const filters = [
  { name: 'Show all', code: VisibilityFilters.SHOW_ALL },
  { name: 'Show complete', code: VisibilityFilters.SHOW_COMPLETE },
  { name: 'Show incomplete', code: VisibilityFilters.SHOW_INCOMPLETE }
]

const FilterList = props => {
  return (
    <ul className="filter-list">
      {filters.map(filter =>
        <FilterItem
          filter={filter}
          key={filter.name}
        />
      )}
    </ul>
  )
}

export default FilterList
