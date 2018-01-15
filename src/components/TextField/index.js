import styled from 'styled-components'
import { darken } from 'polished'

const TextField = styled.input`
  background: ${props => props.theme.dark2};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.text};
	font-size: 1.25em;
	padding: 0.75em 1em;

	&:focus {
		background: ${props => darken(0.025, props.theme.dark2)};
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.025);
	}
`

export const TextArea = TextField.withComponent('textarea').extend`
	height: ${props => props.height || '9em'};
	resize: none;
`

export default TextField
