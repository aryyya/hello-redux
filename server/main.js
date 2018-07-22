// modules

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { getTodos, addTodo, toggleTodo, deleteTodo } = require('./todos')

// server

const server = express()
const port = process.env.PORT || 8080

// middleware

server.use(morgan('dev'))
server.use(bodyParser.json())

// routes

server.get('/', (req, res) => {
  res.end('hello-redux')
})

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
  toggleTodo(id)
  res.json({ status: 'ok' })
})

server.delete('/todos/:id', (req, res) => {
  const { id } = req.params
  deleteTodo(id)
  res.json({ status: 'ok' })
})

// start

server.listen(port, () => {
  console.log(`The server is listening on port ${port}.`)
})
