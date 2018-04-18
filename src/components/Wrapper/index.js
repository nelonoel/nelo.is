import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${props => props.wide ? '64rem' : props.theme.containerWidth};
	padding: 0 1.5rem;
	width: 100%;
`

export default Wrapper
