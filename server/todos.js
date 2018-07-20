const uuid = require('uuid/v4')

const todos = {}

const getTodos = () => {
  return todos
}

const addTodo = text => {
  const id = uuid()
  todos[id] = {
    id,
    createdAt: new Date().toISOString(),
    text,
    completed: false,
  }
}

const toggleTodo = id => {
  todos[id].completed = !todos[id].completed
}

addTodo('Wake up.')
addTodo('Get out of bed.')
addTodo('Brush teeth.')
addTodo('Eat breakfast.')
addTodo('Catch the school bus.')

console.log(todos)

module.exports = {
  getTodos,
  addTodo,
  toggleTodo
}
