import { combineReducers } from 'redux'

import visibilityFilter from './visibility-filter'
import todos from './todos'

export default combineReducers({
  visibilityFilter,
  todos
})
