import { darken } from 'polished'
import styled from 'styled-components'

const TextField = styled.input`
  background: ${props => props.theme.colors.dark[1]};
  border: none;
  border-radius: ${props => props.theme.radii[2]};
  color: ${props => props.theme.colors.text};
	font-family: inherit;
	font-size: 1.25em;
	padding: 0.75em;

	&:focus {
		background: ${props => props.theme.colors.dark[1]};
		box-shadow: inset 0 0 0 2px ${props => props.theme.colors.dark[1]};
	}
`

export const TextArea = TextField.withComponent('textarea').extend`
	height: ${props => props.height || '7.25em'};
	line-height: ${props => props.theme.lineHeights[3]};
	resize: none;
`

export default TextField
