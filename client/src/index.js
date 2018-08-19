// react

import React from 'react';
import ReactDOM from 'react-dom';

// redux

import { Provider } from 'react-redux'
import store from './redux/store'

// components

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// render root

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
