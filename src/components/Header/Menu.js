import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { ButtonLink } from '../Button'
import * as Icon from 'react-feather'

const Navigation = styled.ul`
  align-items: center;
  display: flex;
  font-size: 0.95em;
  justify-content: flex-end;
  list-style-type: none;
  padding: 0;

  li {
    display: inline-block;
  }
`

const NavLink = ButtonLink.extend.attrs({
  transparent: true
})`
  color: ${props => props.theme.text};
  font-size: 0.9em;
  font-weight: 600;
  letter-spacing: 0.125em;
  margin-left: 1.15em;
  margin-right: 0;
  opacity: 0.85;
  padding: 0.75em;
  text-transform: uppercase;

  &:hover {
    background: none;
    opacity: 1;
  }
`

const ThemeToggle = NavLink.withComponent('button')

class Menu extends PureComponent {
  render() {
    return (
      <Navigation>
        <li>
          <NavLink to="/work">
            <Icon.Monitor />
            Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/journal">
            <Icon.Book />
            Journal
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <Icon.Mail />
            Contact
          </NavLink>
        </li>
        <li>
          <ThemeToggle icon>
            <Icon.Moon />
          </ThemeToggle>
        </li>
      </Navigation>
    )
  }
}

export default Menu