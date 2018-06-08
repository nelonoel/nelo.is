import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { display, space, theme } from 'styled-system'
import { Home, Folder, Book, Mail, Sun, Moon } from 'react-feather'
import { rgba } from 'polished'

import { ButtonLink } from '../Button'

const Container = styled.nav`
  display: flex;
`

const Navigation = styled.ul`
  align-items: center;
  display: flex;
  font-size: 0.95em;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const NavItem = styled.li`
  ${display} ${space};
`

const NavLink = ButtonLink.extend.attrs({
  transparent: true,
  sharp: true
})`
	color: ${theme('colors.contrast.4')};
	font-size: 1em;
	line-height: 1;
	margin: 0;
  padding: 1.5em 0.75em;
	transition: none;

  @media (max-width: ${theme('breakpoints.1')}) {
		box-shadow: inset -1px 0 0 ${theme('colors.dark.0')};
		display: inline-flex;
		flex-direction: column;
		font-size: ${theme('fontSizes.0')};
		line-height: 1;
		padding: 0.5em;
		width: 20vw;
    height: 5em;

		& > svg {
			height: 1.75em;
			margin: 0 0 0.5em;
		}
  }
`

const ButtonToggle = NavLink.withComponent('button')

class Menu extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { toggleDarkMode, isDarkMode } = this.props

    return (
      <Container>
        <Navigation>
          <NavItem display={['list-item', 'list-item', 'none']}>
            <NavLink to="/">
              <Home />
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/making">
              <Folder />
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/writing">
              <Book />
              Journal
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/at">
              <Mail />
              Contact
            </NavLink>
          </NavItem>
          <NavItem display={['none', 'none', 'list-item']} mr="-1.4em">
            <ButtonToggle onClick={toggleDarkMode} icon px="1.4em">
              {isDarkMode ? <Sun /> : <Moon />}
            </ButtonToggle>
          </NavItem>
          <NavItem display={['list-item', 'list-item', 'none']}>
            <ButtonToggle onClick={toggleDarkMode}>
              {isDarkMode ? <Sun /> : <Moon />}
              {isDarkMode ? 'Light' : 'Dark'}
            </ButtonToggle>
          </NavItem>
        </Navigation>
      </Container>
    )
  }
}

export default Menu
