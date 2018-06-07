import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-system'
import Wrapper from '../Wrapper'

const TabContainer = styled.div`
  background: rgba(0, 0, 0, 0.025);
  color: ${theme('colors.text')};
  display: flex;
  padding-bottom: 3em;
  padding-top: 8em;
  margin-top: -7em;
  text-align: center;
  z-index: 0;
`

export const Title = styled.h1`
  font-size: 3em;
  margin: 0;
`

export const Subtitle = styled.p`
  font-size: 1.25em;
  margin: 0 0 0.5em;
  max-width: 480px;
`

class Tabs extends PureComponent {
  render() {
    return (
      <TabContainer>
        <Wrapper>{this.props.children}</Wrapper>
      </TabContainer>
    )
  }
}

export default Tab
