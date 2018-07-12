import { combineReducers } from 'redux'

const defaultState = {
  todos: [
    {
      text: 'Make a cup of coffee.',
      completed: true,
    },
    {
      text: 'Walk to downtown.',
      completed: false
    },
    {
      text: 'Read a book.',
      completed: false
    }
  ],
  visibilityFilter: 'SHOW_ALL'
}

const setVisibilityFilter = (state = defaultState.visibilityFilter, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.payload.visibilityFilter
    default:
      return state
  }
}

const todos = (state = defaultState.todos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [ ...state, { text: action.payload.text, completed: false } ]
    case 'TOGGLE_TODO':
      return state.map((todo, index) => {
        return index === action.payload.index ? { ...todo, completed: !todo.completed } : todo
      })
    default:
      return state
  }
}

export default combineReducers({
  setVisibilityFilter,
  todos
})
