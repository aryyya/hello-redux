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
              path="/"
              exact
              component={TodoList}
            />
            <Route
              path="/add-todo"
              component={AddTodo}
            />
            <Route
              path="/edit-todo/:id"
              component={EditTodo}
            />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
