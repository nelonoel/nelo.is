import React from 'react'
import styled from 'styled-components'
import { color, space, textAlign, theme } from 'styled-system'
import { subheading } from '../../styles/typography'

const Subheading = styled.h6`
	${subheading}
	color: ${theme('colors.contrast.2')};
	font-size: 0.85em;

	${color}
	${space}
	${textAlign}
`

Subheading.defaultProps = {
	textAlign: 'inherit'
}

export default Subheading
