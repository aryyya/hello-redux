import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from './action-types'

export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: {
      text
    }
  }
}

export const toggleTodo = index => {
  return {
    type: TOGGLE_TODO,
    payload: {
      index
    }
  }
}

export const setVisibilityFilter = visibilityFilter => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: {
      visibilityFilter
    }
  }
}
