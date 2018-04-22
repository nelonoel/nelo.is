import { darken } from 'polished'
import styled from 'styled-components'
import { theme } from 'styled-system'

const TextField = styled.input`
  background: ${theme('colors.dark.1')};
  border: none;
  border-radius: ${theme('radii.2')};
  color: ${theme('colors.text')};
	font-family: inherit;
	font-size: 1.25em;
	padding: 0.75em;

	&:focus {
		background: ${theme('colors.dark.1')};
		box-shadow: inset 0 0 0 2px ${theme('colors.dark.1')};
	}
`

export const TextArea = TextField.withComponent('textarea').extend`
	height: ${props => props.height || '7.25em'};
	line-height: ${theme('lineHeights.2')};
	resize: none;
`

export default TextField
