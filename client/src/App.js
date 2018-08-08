import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TodoLists from './components/todo-lists/todo-lists'
import TodoList from './components/todo-list/todo-list'
import AddTodo from './components/add-todo/add-todo'
import EditTodo from './components/edit-todo/edit-todo'
import EditTodoList from './components/edit-todo-list/edit-todo-list'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
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
              component={EditTodo}
              exact
            />
            <Route
              path="/todo-list/:todoListId/add-todo-item"
              component={AddTodo}
              exact
            />
            <Route
              path="/todo-list/:todoListId/edit-todo-list"
              component={EditTodoList}
              exact
            />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
