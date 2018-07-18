// action types

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REQUEST_TODOS = 'REQUEST_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'

// action creators

export const addTodo = text => {
  return dispatch => {
    dispatch(requestTodos())
    fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    })
      .then(
        res => {
          return res.json()
        },
        err => {
          console.error(`An error occurred: ${err}`)
        }
      )
      .then(todos => {
        dispatch(receiveTodos(todos))
      })
  }
}

export const toggleTodo = id => {
  return dispatch => {
    dispatch(requestTodos())
    return fetch(`/todos/${id}`, {
      method: 'PATCH'
    })
      .then(
        res => {
          return res.json()
        },
        err => {
          console.error(`An error occurred: ${err}`)
        }
      )
      .then(todos => {
        dispatch(receiveTodos(todos))
      })
  }
}

export const requestTodos = () => {
  return {
    type: REQUEST_TODOS
  }
}

export const receiveTodos = todos => {
  return {
    type: RECEIVE_TODOS,
    payload: {
      todos,
      receivedAt: Date.now()
    }
  }
}

export const fetchTodos = () => {
  return dispatch => {
    dispatch(requestTodos())
    return fetch('/todos')
      .then(
        res => {
          return res.json()
        },
        err => {
          console.error(`An error occurred: ${err}`)
        }
      )
      .then(todos => {
        dispatch(receiveTodos(todos))
      })
  }
}

// default state

const defaultState = {
  todos: {
    0: {
      text: 'Wake up.',
      completed: false
    }
  },
  isFetching: false
}

// reducers

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_TODOS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_TODOS:
      return {
        ...state,
        isFetching: false,
        todos: action.payload.todos
      }
    default:
      return state
  }
}

export default todos
