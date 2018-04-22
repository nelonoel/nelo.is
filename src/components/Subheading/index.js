import React from 'react'
import styled from 'styled-components'
import { theme, textAlign } from 'styled-system'
import { subheading } from '../../styles/typography'

const Subheading = styled.h6`
	${subheading}
	${textAlign}
	color: ${props => props.theme.colors.contrast[2]};
	font-size: 0.85em;
`

Subheading.defaultProps = {
	textAlign: 'inherit'
}

export default Subheading
