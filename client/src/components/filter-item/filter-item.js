import React from 'react'
import './filter-item.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { visibilityFilterActions } from '../../redux/visibility-filter'

const FilterItem = props => {
  return (
    <li
      className="filter-item"
      onClick={() => props.setVisibilityFilter(props.filter.code)}
    >
      <input
        type="checkbox"
        readOnly
        checked={props.filter.code === props.visibilityFilter}
      />
      {props.filter.name}
    </li>
  )
}

FilterItem.propTypes = {
  filter: PropTypes.object.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    visibilityFilter: state.visibilityFilterReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibilityFilter: code => dispatch(visibilityFilterActions.setVisibilityFilter(code))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem)
