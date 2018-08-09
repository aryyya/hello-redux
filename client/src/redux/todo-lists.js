import getUniqueId from '../utility/get-unique-id'
import getDateString from '../utility/get-date-string'

// action types

const ADD_TODO_LIST = 'ADD_TODO_LIST'
const ADD_TODO_ITEM = 'ADD_TODO_ITEM'
const DELETE_TODO_LIST = 'DELETE_TODO_LIST'
const SET_TODO_LIST_NAME = 'SET_TODO_LIST_NAME'

// action creators

const addTodoList = todoListName => {
  return {
    type: ADD_TODO_LIST,
    payload: {
      todoListId: getUniqueId(),
      createdAt: getDateString(),
      name: todoListName
    }
  }
}

const addTodoItem = (todoListId, todoItemId) => {
  return {
    type: ADD_TODO_ITEM,
    payload: {
      todoListId,
      todoItemId
    }
  }
}

const deleteTodoList = todoListId => {
  return {
    type: DELETE_TODO_LIST,
    payload: {
      todoListId
    }
  }
}

const setTodoListName = (todoListId, name) => {
  return {
    type: SET_TODO_LIST_NAME,
    payload: {
      todoListId,
      name
    }
  }
}

const editTodoList = (todoListId, { name }) => {
  if (name) {
    return setTodoListName(todoListId, name)
  }
}

export const todoListsActions = {
  addTodoList,
  addTodoItem,
  deleteTodoList,
  editTodoList
}

// default state

const defaultState = {
  'cwdhyycelvldqmlu': {
    id: 'cwdhyycelvldqmlu',
    name: 'Groceries',
    todoItems: [ 'hiryypvnnxkmpyab', 'ydnjabstrcbynlax' ]
  },
  'nalmysgkeutlsema': {
    id: 'nalmysgkeutlsema',
    name: 'Shopping',
    todoItems: [ 'wdqpsqcibutpfzpp' ]
  }
}

// reducer

export const todoListsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO_LIST: {
      const { todoListId } = action.payload
      return {
        ...state,
        [todoListId]: {
          ...action.payload
        }
      }
    }
    case ADD_TODO_ITEM: {
      const { todoListId, todoItemId } = action.payload
      return {
        ...state,
        [todoListId]: {
          ...state[todoListId],
          todoItems: [
            ...state[todoListId].todoItems,
            todoItemId
          ]
        }
      }
    }
    case DELETE_TODO_LIST: {
      const { todoListId } = action.payload
      const { [todoListId]: _, ...newState } = state
      return newState
    }
    case SET_TODO_LIST_NAME: {
      const { todoListId, name } = action.payload
      return {
        ...state,
        [todoListId]: {
          ...state[todoListId],
          name
        }
      }
    }
    default:
      return state
  }
}
