const todos = {}

const getUniqueId = (() => {
  let uniqueId = 0
  return () => {
    return uniqueId++
  }
})()

const getTodos = () => {
  return todos
}

const addTodo = text => {
  todos[getUniqueId()] = {
    text,
    completed: false
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

module.exports = {
  getTodos,
  addTodo,
  toggleTodo
}
