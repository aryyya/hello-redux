import React, { Component } from 'react'

import { connect } from 'react-redux'

import { VisibilityFilters } from '../redux/actions/action-types'
import { setVisibilityFilter } from '../redux/actions'

class Filter extends Component {
  render () {
    const { visibilityFilter, setVisibilityFilter } = this.props
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
}

const mapStateToProps = state => {
  return {
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibilityFilter: visibilityFilter => dispatch(setVisibilityFilter(visibilityFilter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
