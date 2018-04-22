import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import { lighten, transparentize } from 'polished'

import Wrapper from '../Wrapper'
import Logo from '../Logo'
import Menu, { breakpoint } from './Menu'

const HeaderWrapper = Wrapper.withComponent('header').extend`
  align-items: center;
  display: flex;
  justify-content: space-between;

	@media (max-width: ${breakpoint}) {
		padding: 0.75em 1em;
	}
`

const HeaderContainer = styled(Headroom) `
  & > .headroom {
    background: radial-gradient(farthest-side at bottom center, ${props => transparentize(0.025, lighten(0.025, props.theme.colors.base))}, ${props => props.theme.colors.base});
  }

  & > .headroom--unfixed {
    background: none;
  }

  ${props => props.isNavOpen ? `
    @media (max-width: ${breakpoint}) {
      & > .headroom {
				position: fixed !important;
				transform: none  !important;
				transition: none !important;
      }
    }
  ` : null}
`

class Header extends PureComponent {
	render() {
		const { toggleNav, toggleDarkMode, isNavOpen, isDarkMode } = this.props

		return (
			<HeaderContainer isNavOpen={isNavOpen}>
				<HeaderWrapper>
					<Logo toggleNav={toggleNav} isNavOpen={isNavOpen} />
					<Menu
						toggleNav={toggleNav}
						toggleDarkMode={toggleDarkMode}
						isNavOpen={isNavOpen}
						isDarkMode={isDarkMode} />
				</HeaderWrapper>
			</HeaderContainer>
		)
	}
}

export default Header
