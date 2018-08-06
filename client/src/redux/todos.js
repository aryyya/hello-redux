import store from '../redux/store'
import getUniqueId from '../utility/get-unique-id'
import getDateString from '../utility/get-unique-id'

// action types

const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const DELETE_TODO = 'DELETE_TODO'
const REQUEST_TODOS = 'REQUEST_TODOS'
const RECEIVE_TODOS = 'RECEIVE_TODOS'
const SELECT_TODO = 'SELECT_TODO'
const SET_PRIORITY = 'SET_PRIORITY'
const EDIT_TODO = 'EDIT_TODO'

// action creators

const addTodo = (text, priority = 'low') => {
  const todo = {
    id: getUniqueId(),
    createdAt: new Date().toISOString(),
    text,
    completed: false,
    priority
  }
  store.dispatch(serverAddTodo(todo))
  return {
    type: ADD_TODO,
    payload: {
      todo
    }
  }
}

const serverAddTodo = todo => {
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

const toggleTodo = id => {
  store.dispatch(serverToggleTodo(id))
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  }
}

const serverToggleTodo = id => {
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

const deleteTodo = id => {
  store.dispatch(serverDeleteTodo(id))
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  }
}

const serverDeleteTodo = id => {
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

const requestTodos = () => {
  return {
    type: REQUEST_TODOS
  }
}

const receiveTodos = todos => {
  return {
    type: RECEIVE_TODOS,
    payload: {
      todos,
      receivedAt: Date.now()
    }
  }
}

const fetchTodos = () => {
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

const selectTodo = id => {
  return {
    type: SELECT_TODO,
    payload: {
      id
    }
  }
}

const editTodo = (id, { text, completed, priority }) => {
  store.dispatch(serverEditTodo(id, { text, completed, priority }))
  return {
    type: EDIT_TODO,
    payload: {
      id,
      text,
      completed,
      priority
    }
  }
}

const serverEditTodo = (id, { text, completed, priority }) => {
  return dispatch => {
    return fetch(`/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        completed,
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

export const todosActions = {
  addTodo,
  toggleTodo,
  deleteTodo,
  selectTodo,
  fetchTodos,
  editTodo
}

// default state

const defaultState = {
  todos: {
    '0': {
      id: '0',
      createdAt: getDateString(),
      text: 'Get fruits.',
      completed: true,
      priority: 'low'
    },
    '1': {
      id: '1',
      createdAt: getDateString(),
      text: 'Get milk.',
      completed: false,
      priority: 'medium'
    },
    '2': {
      id: '2',
      createdAt: getDateString(),
      text: 'Return bottles.',
      completed: false,
      priority: 'high'
    }
  },
  isFetching: false
}

// reducers

export const todosReducer = (state = defaultState, action) => {
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
    case DELETE_TODO: {
      const { [action.payload.id]: _, ...newState } = state
      return newState
    }
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
    case EDIT_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload.id]: Object.assign(state.todos[action.payload.id], action.payload)
        }
      }
    default:
      return state
  }
}
