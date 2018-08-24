import { combineReducers } from 'redux'
import { userReducer } from './user'
import { visibilityFilterReducer } from './visibility-filter'
import { todoItemsReducer } from './todo-items'
import { todoListsReducer } from './todo-lists'

const reducers = combineReducers({
  userReducer,
  visibilityFilterReducer,
  todoItemsReducer,
  todoListsReducer
})

export default reducers
