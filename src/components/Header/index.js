import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import { lighten, transparentize } from 'polished'

import Wrapper from '../Wrapper'
import Logo from '../Logo'
import Menu from './Menu'

const breakpoint = '38em'

const HeaderWrapper = Wrapper.withComponent('header').extend`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.75em 0.25em;
`

const HeaderContainer = styled(Headroom) `
  & > .headroom {
    background: radial-gradient(farthest-side at bottom center, ${props => transparentize(0.025, lighten(0.025, props.theme.base))}, ${props => props.theme.base});
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
					<Logo />
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
