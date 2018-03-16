import React, { PureComponent } from 'react'
import styled from 'styled-components'
import * as Icon from 'react-feather'
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
  font-size: 0.85em;
  font-weight: 600;
  letter-spacing: 0.125em;
  margin-left: 1.15em;
  margin-right: 0;
  padding: 0.75em;
  text-transform: uppercase;

  &:hover {
    background: none;
  }

  @media (max-width: ${breakpoint}) {
    letter-spacing: 0.0312em;
    text-transform: none;
    margin: auto;
    min-width: 7.5em;
  }
`

const ButtonToggle = NavLink.withComponent('button').extend`
	color: ${props => props.theme.text};
  margin-right: 0;
  z-index: 1;

  &:hover {
    background: none;
  }

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
							<Icon.Monitor />
							Work
            </NavLink>
					</li>
					<li>
						<NavLink to="/writing">
							<Icon.Book />
							Journal
            </NavLink>
					</li>
					<li>
						<NavLink to="/at">
							<Icon.Mail />
							Contact
            </NavLink>
					</li>
				</Navigation>
				<ButtonToggle onClick={toggleDarkMode} icon>
					{isDarkMode ? <Icon.Sun /> : <Icon.Moon />}
				</ButtonToggle>
				<NavToggle onClick={toggleNav} icon>
					<Hamburger isNavOpen={isNavOpen} />
				</NavToggle>
			</Container>
		)
	}
}

export default Menu
