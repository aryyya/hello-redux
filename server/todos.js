const uuid = require('uuid/v4')

const exists = object => {
  return typeof object !== 'undefined'
}

const todos = {}

const getTodos = () => {
  return todos
}

const addTodo = todo => {
  todos[todo.id] = {
    ...todo
  }
}

const deleteTodo = id => {
  delete todos[id]
}

const editTodo = (id, { text, completed, priority }) => {
  if (exists(text)) todos[id].text = text
  if (exists(completed)) todos[id].completed = completed
  if (exists(priority)) todos[id].priority = priority
}

addTodo({
  id: uuid(),
  createdAt: new Date().toISOString(),
  text: 'Wake up.',
  completed: true,
  priority: 'low'
})

addTodo({
  id: uuid(),
  createdAt: new Date().toISOString(),
  text: 'Get out of bed.',
  completed: false,
  priority: 'medium'
})

addTodo({
  id: uuid(),
  createdAt: new Date().toISOString(),
  text: 'Make breakfast.',
  completed: false,
  priority: 'high'
})

addTodo({
  id: uuid(),
  createdAt: new Date().toISOString(),
  text: 'Catch the school bus.',
  completed: false,
  priority: 'low'
})

addTodo({
  id: uuid(),
  createdAt: new Date().toISOString(),
  text: 'Attend class.',
  completed: false,
  priority: 'medium'
})

addTodo({
  id: uuid(),
  createdAt: new Date().toISOString(),
  text: 'Eat lunch.',
  completed: false,
  priority: 'high'
})

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  editTodo
}
