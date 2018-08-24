import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

const persistedState = localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')) : {}

const store = createStore(
  reducers,
  persistedState,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware
    )
  )
)

store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState()))
})

export default store
