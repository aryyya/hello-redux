import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TodoList from './components/todo-list/todo-list'
import AddTodo from './components/add-todo/add-todo'
import EditTodo from './components/edit-todo/edit-todo'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route
              path="/todo-list/:todoListId"
              component={TodoList}
              exact
            />
            <Route
              path="/todo-list/:todoListId/edit-todo-item/:todoItemId"
              component={EditTodo}
              exact
            />
            <Route
              path="/todo-list/:todoListId/add-todo-item"
              component={AddTodo}
              exact
            />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
