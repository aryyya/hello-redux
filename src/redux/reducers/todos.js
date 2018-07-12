import {
  ADD_TODO,
  TOGGLE_TODO
} from '../actions/action-types'

const defaultState = [
  {
    text: 'Walk to a coffee shop.',
    completed: true
  },
  {
    text: 'Finish project.',
    completed: false
  },
  {
    text: 'Plan for the weekend.',
    completed: false
  },
  {
    text: 'Call the moving company.',
    completed: true
  },
  {
    text: 'See a movie.',
    completed: false
  }
]

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [ ...state, { text: action.payload.text, completed: false } ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        return index === action.payload.index ? { ...todo, completed: !todo.completed } : todo
      })
    default:
      return state
  }
}

export default todos
