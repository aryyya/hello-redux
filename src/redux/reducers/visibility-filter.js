import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER
} from '../actions/action-types';

const defaultState = VisibilityFilters.SHOW_ALL

const visibilityFilter = (state = defaultState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.visibilityFilter
    default:
      return state
  }
}

export default visibilityFilter
