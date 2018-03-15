import styled from 'styled-components'
import { darken } from 'polished'

const TextField = styled.input`
  background: ${props => props.theme.dark2};
  border: transparent solid 1px;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.text};
	font-size: 1.25em;
	padding: 0.75em;

	&:focus {
		background: ${props => darken(0.025, props.theme.dark2)};
    border-color: ${props => darken(0.0375, props.theme.dark2)};
	}
`

export const TextArea = TextField.withComponent('textarea').extend`
	height: ${props => props.height || '9em'};
	resize: none;
`

export default TextField
