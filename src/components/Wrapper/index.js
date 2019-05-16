import styled from 'styled-components'
import { space, textAlign, themeGet } from 'styled-system'

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${props =>
    props.wide ? themeGet('wrapper.wide') : themeGet('wrapper.normal')};
  padding: 0 1.5rem;
  width: 100%;

  ${space} ${textAlign};
`

export default Wrapper
