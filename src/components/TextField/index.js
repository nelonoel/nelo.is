import { darken } from 'polished'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

const TextField = styled.input`
  background: ${themeGet('colors.dark.1')};
  border: none;
  border-radius: ${themeGet('radii.2')};
  color: ${themeGet('colors.text')};
  font-family: inherit;
  font-size: 1.25em;
  padding: 0.75em;

  &:focus {
    background: ${themeGet('colors.dark.2')};
    box-shadow: inset 0 0 0 2px
      ${props => darken(0.015, props.theme.colors.dark[2])};
  }
`

export const TextArea = styled(TextField).attrs({ as: 'textarea' })`
	height: ${props => props.height || '7.25em'};
	line-height: ${themeGet('lineHeights.2')};
	resize: none;
`

export default TextField
