import store from '../redux/store'
import getUniqueId from '../utility/get-unique-id'
import getDateString from '../utility/get-date-string'
import { todoListsActions } from './todo-lists'

// action types

const TODO_ITEMS__ADD_TODO_ITEM = 'TODO_ITEMS__ADD_TODO_ITEM'
const TODO_ITEMS__TOGGLE_TODO_ITEM = 'TODO_ITEMS__TOGGLE_TODO_ITEM'
const TODO_ITEMS__DELETE_TODO_ITEM = 'TODO_ITEMS__DELETE_TODO_ITEM'
const TODO_ITEMS__REQUEST_TODO_ITEMS = 'TODO_ITEMS__REQUEST_TODO_ITEMS'
const TODO_ITEMS__RECEIVE_TODO_ITEMS = 'TODO_ITEMS__RECEIVE_TODO_ITEMS'
const TODO_ITEMS__SELECT_TODO_ITEM = 'TODO_ITEMS__SELECT_TODO_ITEM'
const TODO_ITEMS__SET_PRIORITY = 'TODO_ITEMS__SET_PRIORITY'
const TODO_ITEMS__EDIT_TODO_ITEM = 'TODO_ITEMS__EDIT_TODO_ITEM'

// action creators

const addTodoItem = (todoListId, text, priority) => {
  const todoItemId = getUniqueId()
  const todo = {
    id: todoItemId,
    createdAt: getDateString(),
    text,
    completed: false,
    priority
  }
  store.dispatch(todoListsActions.addTodoItem(todoListId, todoItemId))
  // store.dispatch(serverAddTodoItem(todo))
  return {
    type: TODO_ITEMS__ADD_TODO_ITEM,
    payload: {
      todo
    }
  }
}

const serverAddTodoItem = todo => {
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

const toggleTodoItem = id => {
  // store.dispatch(serverToggleTodoItem(id))
  return {
    type: TODO_ITEMS__TOGGLE_TODO_ITEM,
    payload: {
      id
    }
  }
}

const serverToggleTodoItem = id => {
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

const deleteTodoItem = id => {
  // store.dispatch(serverDeleteTodoItem(id))
  return {
    type: TODO_ITEMS__DELETE_TODO_ITEM,
    payload: {
      id
    }
  }
}

const serverDeleteTodoItem = id => {
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

const requestTodoItems = () => {
  return {
    type: TODO_ITEMS__REQUEST_TODO_ITEMS
  }
}

const receiveTodoItems = todos => {
  return {
    type: TODO_ITEMS__RECEIVE_TODO_ITEMS,
    payload: {
      todos,
      receivedAt: Date.now()
    }
  }
}

const fetchTodoItems = () => {
  return dispatch => {
    dispatch(requestTodoItems())
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
          dispatch(receiveTodoItems(todos))
        }
      })
  }
}

const selectTodoItems = id => {
  return {
    type: TODO_ITEMS__SELECT_TODO_ITEM,
    payload: {
      id
    }
  }
}

const editTodoItem = (id, { text, completed, priority }) => {
  // store.dispatch(serverEditTodoItem(id, { text, completed, priority }))
  return {
    type: TODO_ITEMS__EDIT_TODO_ITEM,
    payload: {
      id,
      text,
      completed,
      priority
    }
  }
}

const serverEditTodoItem = (id, { text, completed, priority }) => {
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
  addTodoItem,
  toggleTodoItem,
  deleteTodoItem,
  selectTodoItems,
  fetchTodoItems,
  editTodoItem
}

// default state

const defaultState = {
  todoItems: {
    'hiryypvnnxkmpyab': {
      id: 'hiryypvnnxkmpyab',
      createdAt: getDateString(),
      text: 'Get fruits.',
      completed: true,
      priority: 'low'
    },
    'ydnjabstrcbynlax': {
      id: 'ydnjabstrcbynlax',
      createdAt: getDateString(),
      text: 'Get milk.',
      completed: false,
      priority: 'medium'
    },
    'wdqpsqcibutpfzpp': {
      id: 'wdqpsqcibutpfzpp',
      createdAt: getDateString(),
      text: 'Return bottles.',
      completed: false,
      priority: 'high'
    }
  },
  isFetching: false
}

// reducers

export const todoItemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TODO_ITEMS__ADD_TODO_ITEM:
      return {
        ...state,
        todoItems: {
          ...state.todoItems,
          [action.payload.todo.id]: {
            ...action.payload.todo
          }
        }
      }
    case TODO_ITEMS__TOGGLE_TODO_ITEM:
      return {
        ...state,
        todoItems: {
          ...state.todoItems,
          [action.payload.id]: {
            ...state.todoItems[action.payload.id],
            completed: !state.todoItems[action.payload.id].completed
          }
        }
      }
    case TODO_ITEMS__DELETE_TODO_ITEM: {
      const newState = { ...state }
      delete newState.todoItems[action.payload.id]
      return newState
    }
    case TODO_ITEMS__REQUEST_TODO_ITEMS:
      return {
        ...state,
        isFetching: true
      }
    case TODO_ITEMS__RECEIVE_TODO_ITEMS:
      return {
        ...state,
        isFetching: false,
        todoItems: action.payload.todoItems
      }
    case TODO_ITEMS__SELECT_TODO_ITEM:
      return {
        ...state,
        selectedTodoId: state.selectedTodoId !== action.payload.id ? action.payload.id : ''
      }
    case TODO_ITEMS__SET_PRIORITY:
      return {
        ...state,
        todoItems: {
          ...state.todoItems,
          [action.payload.id]: {
            ...state.todoItems[action.payload.id],
            priority: action.payload.priority
          }
        }
      }
    case TODO_ITEMS__EDIT_TODO_ITEM:
      return {
        ...state,
        todoItems: {
          ...state.todoItems,
          [action.payload.id]: Object.assign(state.todoItems[action.payload.id], action.payload)
        }
      }
    default:
      return state
  }
}
