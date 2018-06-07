import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-system'
import Headroom from 'react-headroom'
import { lighten, transparentize } from 'polished'

import Wrapper from '../Wrapper'
import Box from '../Box'
import Logo from '../Logo'
import Menu from './Menu'

const HeaderWrapper = Wrapper.withComponent('header').extend`
  align-items: center;
  display: flex;
  justify-content: space-between;

	@media (max-width: ${theme('breakpoints.1')}) {
		padding: 0;
	}
`

const HeaderContainer = styled(Headroom)`
  & > .headroom {
    background: radial-gradient(
      farthest-side at bottom center,
      ${props =>
        transparentize(0.025, lighten(0.025, props.theme.colors.base))},
      ${theme('colors.base')}
    );
    z-index: 2 !important;
  }

  & > .headroom--unfixed {
    background: none;
  }

  @media (max-width: ${theme('breakpoints.1')}) {
    height: 0 !important;

    & > .headroom {
      background: radial-gradient(
        farthest-side at top center,
        ${props =>
          transparentize(0.025, lighten(0.025, props.theme.colors.base))},
        ${theme('colors.base')}
      ) !important;
      box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.025);
      position: fixed !important;
      bottom: -1px !important;
      top: auto !important;
      transform: translateY(100%) !important;
      transition: all 0.2s ease-in-out !important;
    }

    & > .headroom.headroom--pinned,
    & > .headroom.headroom--unfixed {
      transform: translateY(0) !important;
    }
  }
`

class Header extends PureComponent {
  render() {
    const { toggleDarkMode, isDarkMode } = this.props

    return (
      <HeaderContainer>
        <HeaderWrapper>
          <Box display={['none', 'none', 'inline-block']}>
            <Logo />
          </Box>
          <Menu toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        </HeaderWrapper>
      </HeaderContainer>
    )
  }
}

export default Header
