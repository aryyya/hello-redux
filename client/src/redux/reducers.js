import { combineReducers } from 'redux'
import { visibilityFilterReducer } from './visibility-filter'
import { todosReducer } from './todos'

const reducers = combineReducers({
  visibilityFilterReducer,
  todosReducer
})

export default reducers
