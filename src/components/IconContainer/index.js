import styled from 'styled-components'
import { theme } from 'styled-system'
import Box from '../Box'

const IconContainer = Box.extend`
  align-items: center;
  justify-content: center;
  background: ${theme('colors.contrast.0')};
  color: ${theme('colors.contrast.3')};
  border-radius: ${theme('radii.4')};
  display: inline-flex;
  font-size: 1em;

  & > svg {
    width: 60%;
  }

  & > img {
    width: 60%;
  }
`

export default IconContainer
