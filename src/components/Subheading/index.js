import React from 'react'
import styled from 'styled-components'
import { subheading } from '../../styles/typography'

const Subheading = styled.h6`
	${subheading}
	color: ${props => props.theme.contrast3};
	font-size: 0.85em;
	text-align: ${({ textAlign }) => textAlign};
`

Subheading.defaultProps = {
	textAlign: 'inherit'
}

export default Subheading

