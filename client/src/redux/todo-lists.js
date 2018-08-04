import getUniqueId from '../utility/get-unique-id'
import getDateString from '../utility/get-date-string'

// action types

const ADD_TODO_LIST = 'ADD_TODO_LIST'

// action creators

const addTodoList = name => {
  return {
    type: ADD_TODO_LIST,
    payload: {
      todoList: {
        id: getUniqueId(),
        createdAt: getDateString(),
        name
      }
    }
  }
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
    case ADD_TODO_LIST:
      return {
        ...state,
        [action.payload.todoList.id]: { ...action.payload.todoList }
      }
    default:
      return state
  }
}
