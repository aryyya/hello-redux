import getUniqueId from '../utility/get-unique-id'
import getDateString from '../utility/get-date-string'
import store from './store'
import { todosActions } from './todo-items'

// action types

const TODO_LISTS__ADD_TODO_LIST = 'TODO_LISTS__ADD_TODO_LIST'
const TODO_LISTS__ADD_TODO_ITEM = 'TODO_LISTS__ADD_TODO_ITEM'
const TODO_LISTS__DELETE_TODO_LIST = 'TODO_LISTS__DELETE_TODO_LIST'
const TODO_LISTS__SET_TODO_LIST_NAME = 'TODO_LISTS__SET_TODO_LIST_NAME'
const TODO_LISTS__DELETE_TODO_ITEM = 'TODO_LISTS__DELETE_TODO_ITEM'

// action creators

const addTodoList = todoListName => {
  return {
    type: TODO_LISTS__ADD_TODO_LIST,
    payload: {
      id: getUniqueId(),
      createdAt: getDateString(),
      name: todoListName,
      todoItems: []
    }
  }
}

const addTodoItem = (todoListId, todoItemId) => {
  return {
    type: TODO_LISTS__ADD_TODO_ITEM,
    payload: {
      todoListId,
      todoItemId
    }
  }
}

const deleteTodoList = todoListId => {
  const todoLists = store.getState().todoListsReducer
  todoLists[todoListId].todoItems.forEach(todoItem => {
    store.dispatch(todosActions.deleteTodoItem(todoItem))
  })

  return {
    type: TODO_LISTS__DELETE_TODO_LIST,
    payload: {
      todoListId
    }
  }
}

const setTodoListName = (todoListId, name) => {
  return {
    type: TODO_LISTS__SET_TODO_LIST_NAME,
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

const deleteTodoItem = (todoListId, todoItemId) => {
  if (store.getState().todoListsReducer[todoListId]) {
    return {
      type: TODO_LISTS__DELETE_TODO_ITEM,
      payload: {
        todoListId,
        todoItemId
      }
    }
  } else {
    return {
      type: 'NO_ACTION'
    }
  }
}

export const todoListsActions = {
  addTodoList,
  addTodoItem,
  deleteTodoList,
  editTodoList,
  deleteTodoItem
}

// default state

const defaultState = {
  'cwdhyycelvldqmlu': {
    id: 'cwdhyycelvldqmlu',
    createdAt: getDateString(),
    name: 'Groceries',
    todoItems: [ 'hiryypvnnxkmpyab', 'ydnjabstrcbynlax' ],
  },
  'nalmysgkeutlsema': {
    id: 'nalmysgkeutlsema',
    createdAt: getDateString(),
    name: 'Shopping',
    todoItems: [ 'wdqpsqcibutpfzpp' ]
  }
}

// reducer

export const todoListsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TODO_LISTS__ADD_TODO_LIST: {
      const { id } = action.payload
      return {
        ...state,
        [id]: {
          ...action.payload
        }
      }
    }
    case TODO_LISTS__ADD_TODO_ITEM: {
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
    case TODO_LISTS__DELETE_TODO_LIST: {
      const { todoListId } = action.payload
      const { [todoListId]: _, ...newState } = state
      return newState
    }
    case TODO_LISTS__SET_TODO_LIST_NAME: {
      const { todoListId, name } = action.payload
      return {
        ...state,
        [todoListId]: {
          ...state[todoListId],
          name
        }
      }
    }
    case TODO_LISTS__DELETE_TODO_ITEM: {
      const { todoListId, todoItemId } = action.payload
      const newState = { ...state }
      newState[todoListId].todoItems = newState[todoListId].todoItems.filter(todoItem => todoItem !== todoItemId)
      return newState
    }
    default:
      return state
  }
}
