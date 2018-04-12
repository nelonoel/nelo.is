import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Monitor, Book, Mail, Sun, Moon } from 'react-feather'
import { rgba } from 'polished'

import { ButtonLink } from '../Button'
import Hamburger from './Hamburger'

export const breakpoint = '35em'

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
    pointer-events: none;
    position: fixed;
    right: 0;
    top: 0;

    & > li {
      margin: 0 auto;
			opacity: 0;
			transform: translateY(20%);
    }

    ${props => props.isNavOpen ? `
      opacity: 1;
      pointer-events: initial;

			& > li {
				opacity: 1;
				transform: none;
				transition: opacity .2s ease,
										transform .2s ease;

				&:nth-child(1) {
					transition-delay: .1s;
				}

				&:nth-child(2) {
					transition-delay: .2s;
				}

				&:nth-child(3) {
					transition-delay: .3s;
				}
			}
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
	opacity: 0.9;
  padding: 0.75em 1em;
	transition: none;

  &:hover, &:focus {
		background: none;
		opacity: 1;
	}

  @media (max-width: ${breakpoint}) {
		margin: auto;
		padding: 0.25em 0.5em;
    min-width: 7.25em;
  }
`

const ButtonToggle = NavLink.withComponent('button').extend`
	color: ${props => props.theme.text};
	margin-right: -0.75em;
  z-index: 1;

  @media (max-width: ${breakpoint}) {
		margin-right: 0;
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
	constructor(props) {
		super(props)
		this.toggleNav = this.toggleNav.bind(this)
	}

	toggleNav() {
		if (this.toggle && window.getComputedStyle(this.toggle, null).display !== 'none') {
			this.props.toggleNav()
		}
	}

	render() {
		const { toggleDarkMode, isNavOpen, isDarkMode } = this.props

		return (
			<Container>
				<Navigation isNavOpen={isNavOpen}>
					<li>
						<NavLink to="/making" onMouseUp={this.toggleNav}>
							<Monitor />
							Projects
            </NavLink>
					</li>
					<li>
						<NavLink to="/writing" onMouseUp={this.toggleNav}>
							<Book />
							Journal
            </NavLink>
					</li>
					<li>
						<NavLink to="/at" onMouseUp={this.toggleNav}>
							<Mail />
							Contact
            </NavLink>
					</li>
				</Navigation>
				<ButtonToggle onClick={toggleDarkMode} icon>
					{isDarkMode ? <Sun /> : <Moon />}
				</ButtonToggle>
				<NavToggle onClick={this.toggleNav} icon innerRef={toggle => { this.toggle = toggle }}>
					<Hamburger isNavOpen={isNavOpen} />
				</NavToggle>
			</Container>
		)
	}
}

export default Menu
