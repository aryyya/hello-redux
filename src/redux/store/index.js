import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from '../reducers'

export default createStore(reducers, composeWithDevTools(applyMiddleware()))
