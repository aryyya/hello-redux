import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Landing from './components/landing/landing'
import TodoLists from './components/todo-lists/todo-lists'
import AddTodoItem from './components/add-todo-item/add-todo-item'
import EditTodoItem from './components/edit-todo-item/edit-todo-item'
import TodoList from './components/todo-list/todo-list'
import AddTodoList from './components/add-todo-list/add-todo-list'
import EditTodoList from './components/edit-todo-list/edit-todo-list'

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <div>
              <Route
                path="/"
                component={Landing}
                exact
              />
              <Route
                path="/todo-list"
                component={TodoLists}
                exact
              />
              <Route
                path="/todo-list/:todoListId"
                component={TodoList}
                exact
              />
              <Route
                path="/todo-list/:todoListId/edit-todo-item/:todoItemId"
                component={EditTodoItem}
                exact
              />
              <Route
                path="/todo-list/:todoListId/add-todo-item"
                component={AddTodoItem}
                exact
              />
              <Route
                path="/todo-list/:todoListId/edit-todo-list"
                component={EditTodoList}
                exact
              />
              <Route
                path="/add-todo-list"
                component={AddTodoList}
                exact
              />
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    )
  }
}

injectGlobal`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 67.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  @keyframes slide-in-from-left {
    from {
      opacity: 0;
      transform: translateX(-25px);
    }
  }
`

const theme = {
  colors: {
    main: {
      color: '#fff',
      backgroundImage: 'linear-gradient(to bottom, #46529d, #46529d, #46529d, #46529d, #46529d)'
    }
  }
}

export default App
