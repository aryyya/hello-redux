import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Checkbox from '../checkbox/checkbox'
import Priority from '../priority/priority'
import { withRouter } from 'react-router-dom'

class TodoItem extends Component {

  static propTypes = {
    todoItem: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  onClickTodoItem () {
    const { history, todoItem } = this.props
    const { todoListId } = this.props.match.params 

    history.push(`/todo-list/${todoListId}/edit-todo-item/${todoItem.id}`)
  }

  render () {
    const { todoItem } = this.props
  
    return (
      <TodoItemStyled onClick={this.onClickTodoItem.bind(this)}>
        <PriorityAndTextContainerStyled>
          <Priority priority={todoItem.priority} />
          <TextStyled completed={todoItem.completed} priority={todoItem.priority}>
            {todoItem.text}
          </TextStyled>
        </PriorityAndTextContainerStyled>
        <Checkbox todoItem={todoItem} />
      </TodoItemStyled>
    )
  }
}

const TodoItemStyled = styled.li`
  user-select: none;
  margin: 5px;
  font-size: 15px;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`

const PriorityAndTextContainerStyled = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

const TextStyled = styled.p`
  margin-left: 10px;
  text-decoration: ${({completed}) =>
    completed ? 'line-through' : 'none'
  };
  font-weight: ${({priority}) => ({
    'low': 300,
    'medium': 400,
    'high': 500
  }[priority])};
`

export default withRouter(TodoItem)
