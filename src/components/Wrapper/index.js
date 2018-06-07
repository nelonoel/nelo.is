import React from 'react'
import styled from 'styled-components'
import { space, textAlign } from 'styled-system'

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${props =>
    props.wide ? props.theme.wrapper.wide : props.theme.wrapper.normal};
  padding: 0 1.5rem;
  width: 100%;

  ${space} ${textAlign};
`

export default Wrapper
