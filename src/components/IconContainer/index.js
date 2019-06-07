import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'
import Box from '../Box'

const IconContainer = styled(Box)`
  align-items: center;
  justify-content: center;
  background: ${themeGet('colors.contrast.0')};
  color: ${themeGet('colors.contrast.3')};
  border-radius: ${themeGet('radii.4')};
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
