import React, { Component } from 'react'
import styled from 'styled-components'
import { PageSection } from '../page/page'
import PropTypes from 'prop-types'
import mountains from '../../img/mountains.jpg'
import CompletionRing from '../completion-ring/completion-ring'
import x from '../../svg/x.svg'
import { Link } from 'react-router-dom'

class TodoListPageHeader extends Component {

  static propTypes = {
    todoList: PropTypes.object.isRequired,
    completedItems: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired
  }

  render () {
    const { todoList, completedItems, totalItems } = this.props
    const progress = Math.floor(completedItems / totalItems * 100)

    return (
      <TodoListPageHeaderStyled {...this.props} horizontal>
        <Content>
          <LeftSection vertical flex={10}>
            <ExitLink to="/todo-list">
              <ExitLinkIcon />
            </ExitLink>
            <Title>{todoList.name}</Title>
            <Spacer />
          </LeftSection>
          <RightSection flex={9}>
            <Spacer />
            <Counts>
              <Count>
                <Number>{totalItems}</Number>
                <Text>Tasks</Text>
              </Count>
              <Count>
                <Number>{completedItems}</Number>
                <Text>Completed</Text>
              </Count>
            </Counts>
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
  background-position: bottom;
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
  box-shadow: 5px 0 50px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: flex-start;

  > * {
    flex: 1;
  }
`

const ExitLink = styled(Link)`
`

const ExitLinkIcon = styled.svg`
  mask: url(${x});
  background-color: white;
  width: 3.5rem;
  height: 3.5rem;
`

const Title = styled.h1`
  font-weight: 300;
  font-size: 2.75rem;
  color: white;
  display: flex;
  align-items: center;
`

const RightSection = styled(PageSection)`
  color: white;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: space-around;

  > * {
    flex: 1;
  }
`

const Spacer = styled.div``

const Counts = styled.div`
  display: flex;
  align-items: center;
`

const Count = styled.div`
  text-align: right;
  margin: 0 1rem;
`

const Number = styled.div`
  font-size: 2rem;
`

const Text = styled.div`
  opacity: 0.6;
`
