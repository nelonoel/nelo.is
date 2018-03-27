import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${props => props.wide ? '57em' : props.theme.containerWidth};
	padding: ${props => props.wide ? '0 1em' : null};
	width: 100%;

	@media(max-width: 42em) {
		padding-left: 1em;
		padding-right: 1em;
	}
`

export default Wrapper
