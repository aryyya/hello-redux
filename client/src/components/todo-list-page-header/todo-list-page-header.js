import React, { Component } from 'react'
import styled from 'styled-components'
import { PageSection } from '../page/page'
import PropTypes from 'prop-types'
import mountains from '../../img/mountains.jpg'

class TodoListPageHeader extends Component {

  static propTypes = {
    todoList: PropTypes.object.isRequired
  }

  render () {
    const { todoList } = this.props

    return (
      <TodoListPageHeaderStyled {...this.props} horizontal>
        <Content>
          <LeftSection flex={3}>
            <Title>{todoList.name}</Title>
          </LeftSection>
          <RightSection flex={1}>
            <p>Other</p>
          </RightSection>
        </Content>
      </TodoListPageHeaderStyled>
    )
  }
}

export default TodoListPageHeader

const TodoListPageHeaderStyled = styled(PageSection)`
  background-image: url(${mountains});
  background-size: cover;
  position: relative;
`

const Content = styled.div`
  display: flex;
  background-color: rgba(0, 0, 255, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
  padding: inherit;
`

const LeftSection = styled(PageSection)`
  justify-content: flex-start;
  padding: 0;
`

const Title = styled.h1`
  font-weight: 300;
  font-size: 3rem;
  color: white;
`

const RightSection = styled(PageSection)``
