import React, { Component } from 'react'
import styled from 'styled-components'
import { PageSection } from '../page/page'
import PropTypes from 'prop-types'
import mountains from '../../img/mountains.jpg'
import CompletionRing from '../completion-ring/completion-ring'

class TodoListPageHeader extends Component {

  static propTypes = {
    todoList: PropTypes.object.isRequired,
    progress: PropTypes.number.isRequired
  }

  render () {
    const { todoList, progress } = this.props

    return (
      <TodoListPageHeaderStyled {...this.props} horizontal>
        <Content>
          <LeftSection flex={5}>
            <Title>{todoList.name}</Title>
          </LeftSection>
          <RightSection flex={4}>
            <CompletionRing progress={progress} />
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
  background-color: rgba(0, 125, 255, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
`

const LeftSection = styled(PageSection)`
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 5px 0 50px rgba(0, 0, 0, 0.25);
  justify-content: flex-start;
`

const Title = styled.h1`
  font-weight: 300;
  font-size: 2.75rem;
  color: white;
`

const RightSection = styled(PageSection)`
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0;
`
