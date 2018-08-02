// modules

const express = require('express')
const morgan = require('morgan')
const path = require('path')
const { getTodos, addTodo, deleteTodo, editTodo } = require('./todos')

// server

const server = express()
const port = process.env.PORT || 8080

// middleware

server.use(
  morgan(
    process.env.NODE_ENV === 'production' ? 'short' : 'dev'
  )
)

server.use(
  express.json()
)

if (process.env.NODE_ENV === 'production') {
  server.use(
    express.static(
      path.join(`${__dirname}/../client/build`)
    )
  )
}

// routes

server.get('/todos', (req, res) => {
  res.json(getTodos())
})

server.post('/todos', (req, res) => {
  const { todo } = req.body
  addTodo(todo)
  res.json({ status: 'ok' })
})

server.patch('/todos/:id', (req, res) => {
  const { id } = req.params
  const { text, completed, priority } = req.body
  editTodo(id, { text, completed, priority })
  res.json({ status: 'ok' })
})

server.delete('/todos/:id', (req, res) => {
  const { id } = req.params
  deleteTodo(id)
  res.json({ status: 'ok' })
})

// start

server.listen(port, () => {
  if (process.env.NODE_ENV === 'production') {
    console.log('The server is in production mode.')
  } else {
    console.log('The server is in development mode.')
  }
  console.log(`The server is listening on port ${port}.`)
})
