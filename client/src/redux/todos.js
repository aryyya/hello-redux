import store from '../redux/store'
import uuid from 'uuid/v4'

// action types

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const REQUEST_TODOS = 'REQUEST_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'
export const SELECT_TODO = 'SELECT_TODO'
export const SET_PRIORITY = 'SET_PRIORITY'

// action creators

export const addTodo = text => {
  const todo = {
    id: uuid(),
    createdAt: new Date().toISOString(),
    text,
    completed: false,
    priority: 'low'
  }
  store.dispatch(serverAddTodo(todo))
  return {
    type: ADD_TODO,
    payload: {
      todo
    }
  }
}

export const serverAddTodo = todo => {
  return dispatch => {
    fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ todo })
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

      })
  }
}

export const toggleTodo = id => {
  store.dispatch(serverToggleTodo(id))
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  }
}

export const serverToggleTodo = id => {
  return dispatch => {
    return fetch(`/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        toggle: 1
      })
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

      })
  }
}

export const deleteTodo = id => {
  store.dispatch(serverDeleteTodo(id))
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  }
}

export const serverDeleteTodo = id => {
  return dispatch => {
    return fetch(`/todos/${id}`, {
      method: 'DELETE'
    })
      .then(
        res => {
          return res.json()
        },
        err => {
          console.error(`An error occurred: ${err}`)
        }
      )
      .then(() => {

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
        if (todos) {
          dispatch(receiveTodos(todos))
        }
      })
  }
}

export const selectTodo = id => {
  return {
    type: SELECT_TODO,
    payload: {
      id
    }
  }
}

export const setPriority = (id, priority) => {
  store.dispatch(serverSetPriority(id, priority))
  return {
    type: SET_PRIORITY,
    payload: {
      id,
      priority
    }
  }
}

export const serverSetPriority = (id, priority) => {
  return dispatch => {
    return fetch(`/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        priority
      })
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

      })
  }
}

// default state

const defaultState = {
  todos: {
    '0': {
      id: '0',
      createdAt: new Date().toISOString(),
      text: 'Wake up.',
      completed: false,
      priority: 'low'
    }
  },
  isFetching: false,
  selectedTodoId: ''
}

// reducers

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload.todo.id]: {
            ...action.payload.todo
          }
        }
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload.id]: {
            ...state.todos[action.payload.id],
            completed: !state.todos[action.payload.id].completed
          }
        }
      }
    case DELETE_TODO:
      let newState = { ...state }
      delete newState.todos[action.payload.id]
      return newState
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
    case SELECT_TODO:
      return {
        ...state,
        selectedTodoId: state.selectedTodoId !== action.payload.id ? action.payload.id : ''
      }
    case SET_PRIORITY:
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload.id]: {
            ...state.todos[action.payload.id],
            priority: action.payload.priority
          }
        }
      }
    default:
      return state
  }
}

export default todos
