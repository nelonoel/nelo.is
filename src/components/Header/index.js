import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Wrapper from '../Wrapper'
import Logo from '../Logo'
import Menu from './Menu'

const HeaderContainer = Wrapper.withComponent('header').extend`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  position: relative;
  z-index: 1;
`

class Header extends PureComponent {
  render() {
    return (
      <HeaderContainer>
        <Logo />
        <Menu />
      </HeaderContainer>
    )
  }
}

export default Header