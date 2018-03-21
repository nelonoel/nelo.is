import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Monitor, Book, Mail, Sun, Moon } from 'react-feather'
import { rgba } from 'polished'

import { ButtonLink } from '../Button'
import Hamburger from './Hamburger'

const breakpoint = '38em'

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

  li {
    display: inline-flex;
  }

  @media (max-width: ${breakpoint}) {
    background: ${props => rgba(props.theme.base, 0.99)};
    bottom: 0;
    flex-direction: column;
    font-size: 1.5em;
    justify-content: center;
    left: 0;
    opacity: 0;
    pointer-events: 0;
    position: fixed;
    right: 0;
    top: 0;

    & > li {
      margin: 0.25em auto;
    }

    ${props => props.isNavOpen ? `
      opacity: 1;
      pointer-events: normal;
    ` : null}
  }
`

const NavLink = ButtonLink.extend.attrs({
	transparent: true
}) `
	color: ${props => props.theme.text};
  font-size: 1em;
  margin-left: 0.25em;
  margin-right: 0;
  padding: 0.75em 1.125em;
	transition: none;

  &:hover, &:focus {
    background: none;
	}

  @media (max-width: ${breakpoint}) {
    margin: auto;
    min-width: 8em;
  }
`

const ButtonToggle = NavLink.withComponent('button').extend`
	color: ${props => props.theme.text};
  margin-right: 0;
  z-index: 1;

  @media (max-width: ${breakpoint}) {
		min-width: 0;
		transform: scale(1.25);

		&:active {
			transform: scale(1.25);
		}
  }
`

const NavToggle = ButtonToggle.extend`
  display: none;
	height: 2.5em;

  @media (max-width: ${breakpoint}) {
		display: inline-flex;
		transform: none;

		&:active {
			transform: none;
		}
  }
`

class Menu extends PureComponent {

	render() {
		const { toggleNav, toggleDarkMode, isNavOpen, isDarkMode } = this.props

		return (
			<Container>
				<Navigation isNavOpen={isNavOpen}>
					<li>
						<NavLink to="/making">
							<Monitor />
							Projects
            </NavLink>
					</li>
					<li>
						<NavLink to="/writing">
							<Book />
							Journal
            </NavLink>
					</li>
					<li>
						<NavLink to="/at">
							<Mail />
							Contact
            </NavLink>
					</li>
				</Navigation>
				<ButtonToggle onClick={toggleDarkMode} icon>
					{isDarkMode ? <Sun /> : <Moon />}
				</ButtonToggle>
				<NavToggle onClick={toggleNav} icon>
					<Hamburger isNavOpen={isNavOpen} />
				</NavToggle>
			</Container>
		)
	}
}

export default Menu
