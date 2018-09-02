import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

class TodoList extends Component {

  static propTypes = {
    todoList: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  onClick () {
    const { todoList } = this.props

    this.props.history.push(`/todo-list/${todoList.id}`)
  }

  render () {
    const { todoList } = this.props
    
    return (
      <TodoListStyled onClick={this.onClick.bind(this)}>
        <Name>
          {todoList.name}
        </Name>
        <Items>
          {todoList.todoItems.length}
        </Items>
      </TodoListStyled>
    )
  }
}

export default withRouter(TodoList)

const TodoListStyled = styled.li`
  font-size: 3rem;
  font-weight: 300;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`

const Name = styled.div``

const Items = styled.div`
  color: ${({ theme }) => theme.colors.main.altColor };
`
