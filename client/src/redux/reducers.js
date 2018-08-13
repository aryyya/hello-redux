import { combineReducers } from 'redux'
import { visibilityFilterReducer } from './visibility-filter'
import { todosReducer } from './todo-items'
import { todoListsReducer } from './todo-lists'

const reducers = combineReducers({
  visibilityFilterReducer,
  todosReducer,
  todoListsReducer
})

export default reducers
