// action types

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETE: 'SHOW_COMPLETED',
  SHOW_INCOMPLETE: 'SHOW_INCOMPLETE'
}

// action creators

export const setVisibilityFilter = visibilityFilter => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: {
      visibilityFilter
    }
  }
}

// default state

const defaultState = VisibilityFilters.SHOW_ALL

// reducers

const visibilityFilter = (state = defaultState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.visibilityFilter
    default:
      return state
  }
}

export default visibilityFilter
