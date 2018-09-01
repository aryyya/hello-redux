import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import { Page } from './components/page/page'

import LandingPage from './components/landing-page/landing-page'
import TodoListsPage from './components/todo-lists-page/todo-lists-page'
import AllTodoItemsPage from './components/all-todo-items-page/all-todo-items-page'
import AddTodoItemPage from './components/add-todo-item-page/add-todo-item-page'
import EditTodoItemPage from './components/edit-todo-item-page/edit-todo-item-page'
import TodoListPage from './components/todo-list-page/todo-list-page'
import AddTodoListPage from './components/add-todo-list-page/add-todo-list-page'
import EditTodoListPage from './components/edit-todo-list-page/edit-todo-list-page'

class App extends Component {
  
  render() {
    return (
      <StyledApp>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route
                path="/"
                component={LandingPage}
                exact
              />
              <Route
                path="/all-todo-items"
                component={AllTodoItemsPage}
                exact
              />
              <Route
                path="/todo-list"
                component={TodoListsPage}
                exact
              />
              <Route
                path="/todo-list/:todoListId"
                component={TodoListPage}
                exact
              />
              <Route
                path="/todo-list/:todoListId/edit-todo-item/:todoItemId"
                component={EditTodoItemPage}
                exact
              />
              <Route
                path="/todo-list/:todoListId/add-todo-item"
                component={AddTodoItemPage}
                exact
              />
              <Route
                path="/todo-list/:todoListId/edit-todo-list"
                component={EditTodoListPage}
                exact
              />
              <Route
                path="/add-todo-list"
                component={AddTodoListPage}
                exact
              />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </StyledApp>
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

  #root {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const StyledApp = styled(Page)`
`

const theme = {
  colors: {
    main: {
      color: '#fff',
      altColor: '#767FB6',
      linkColor: '#3B9DD7',
      backgroundImage: 'linear-gradient(to bottom, #46529d, #46529d, #46529d, #46529d, #46529d)'
    }
  }
}

export default App
