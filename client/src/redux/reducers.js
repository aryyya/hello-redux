import { combineReducers } from 'redux'
import { visibilityFilterReducer } from './visibility-filter'
import { todoItemsReducer } from './todo-items'
import { todoListsReducer } from './todo-lists'

const reducers = combineReducers({
  visibilityFilterReducer,
  todoItemsReducer,
  todoListsReducer
})

export default reducers
