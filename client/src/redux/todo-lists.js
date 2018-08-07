import getUniqueId from '../utility/get-unique-id'
import getDateString from '../utility/get-date-string'

// action types

const ADD_TODO_LIST = 'ADD_TODO_LIST'
const ADD_TODO_ITEM = 'ADD_TODO_ITEM'
const DELETE_TODO_LIST = 'DELETE_TODO_LIST'

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

export const todoListsActions = {
  addTodoList,
  addTodoItem,
  deleteTodoList
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
    default:
      return state
  }
}
