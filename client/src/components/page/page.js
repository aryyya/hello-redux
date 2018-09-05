import styled from 'styled-components'

const Page = styled.div`
  height: 100%;
  display: flex;
  flex-direction: ${({ horizontal, vertical }) =>
    vertical ? 'column' : horizontal ? 'row' : 'column'
  };
`

const PageSection = styled.div`
  display: flex;
  flex: ${({ flex }) =>
    flex || '1'
  };
  flex-direction: ${({ horizontal, vertical }) =>
    vertical ? 'column' : horizontal ? 'row' : 'auto'
  };
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
`

export {
  Page,
  PageSection
}
