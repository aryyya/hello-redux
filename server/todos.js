const uuid = require('uuid/v4')

const todos = {}

const getTodos = () => {
  return todos
}

const addTodo = todo => {
  todos[todo.id] = {
    ...todo
  }
}

const toggleTodo = id => {
  todos[id].completed = !todos[id].completed
}

const deleteTodo = id => {
  delete todos[id]
}

addTodo({
  id: uuid(),
  createdAt: new Date().toISOString(),
  text: 'Wake up.',
  completed: true
})

addTodo({
  id: uuid(),
  createdAt: new Date().toISOString(),
  text: 'Get out of bed.',
  completed: false
})

addTodo({
  id: uuid(),
  createdAt: new Date().toISOString(),
  text: 'Catch the school bus.',
  completed: false
})

module.exports = {
  getTodos,
  addTodo,
  toggleTodo,
  deleteTodo
}
