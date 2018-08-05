import getUniqueId from '../utility/get-unique-id'
import getDateString from '../utility/get-date-string'

// action types

const ADD_TODO_LIST = 'ADD_TODO_LIST'
const ADD_TODO_ITEM = 'ADD_TODO_ITEM'

// action creators

const addTodoList = name => {
  return {
    type: ADD_TODO_LIST,
    payload: {
      id: getUniqueId(),
      createdAt: getDateString(),
      name
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

export const todoListsActions = {
  addTodoList
}

// default state

const defaultState = {
  '0': {
    id: '0',
    name: 'Groceries',
    todoItems: [ '0', '1' ]
  },
  '1': {
    id: '1',
    name: 'Shopping',
    todoItems: [ '2' ]
  }
}

// reducer

export const todoListsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO_LIST: {
      const { id } = action.payload
      return {
        ...state,
        [id]: {
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
    default:
      return state
  }
}
