import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${props => props.theme.containerWidth};
  width: 100%;

  @media (max-width: 42em) {
    padding-left: 1em;
    padding-right: 1em;
  }
`

export default Wrapper