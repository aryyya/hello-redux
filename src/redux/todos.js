// action types

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REQUEST_TODOS = 'REQUEST_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'

// action creators

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

export const receiveTodos = json => {
  return {
    type: RECEIVE_TODOS,
    payload: {
      json,
      receivedAt: Date.now()
    }
  }
}

// default state

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

// reducers

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
