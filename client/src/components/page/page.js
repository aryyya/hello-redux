import styled from 'styled-components'

const Page = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const PageSection = styled.div`
  flex: ${({flex}) =>
    flex || '1'
  };
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`

export {
  Page,
  PageSection
}
