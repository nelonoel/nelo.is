import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

const Badge = styled.span`
  border: ${themeGet('colors.secondary')} solid 2px;
  border-radius: ${themeGet('radii.2')};
  color: ${themeGet('colors.secondary')};
  display: inline-block;
  font-size: 0.5em;
  font-weight: bold;
  letter-spacing: 0.125em;
  line-height: 2;
  padding: 0 0.625em 0 0.75em;
  text-transform: uppercase;
`

export default Badge
