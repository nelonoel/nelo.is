import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { space, minWidth } from 'styled-system'
import { lighten, rgba } from 'polished'
import { body } from '../../styles/typography'

const Button = styled.button`
	${body}
  align-items: center;
  background: ${props =>
    props.transparent
      ? 'none'
      : props.inverted
        ? props.theme.colors.white
        : props.secondary
          ? props.theme.colors.secondary
          : props.theme.colors.primary};
  border: none;
  border-radius: ${props =>
    props.sharp ? props.theme.radii[0] : props.theme.radii[2]};
  box-shadow: ${props =>
    props.transparent
      ? 'none'
      : `0 0 0 1px rgba(0, 0, 0, 0.01),
			 0 1px 3px rgba(0, 0, 0, 0.09);`};
  box-sizing: border-box;
  color: ${props =>
    props.transparent || props.inverted
      ? props.secondary
        ? props.theme.colors.secondary
        : props.theme.colors.primary
      : props.theme.colors.white};
  cursor: pointer;
  display: inline-flex;
  font-size: 0.95em;
	font-weight: normal;
	justify-content: center;
  line-height: ${props => (props.wide ? 3 : 2.4)};
	margin-right: ${props => (props.wide ? null : '0.5em')};
  padding: ${props =>
    props.icon ? '1em' : props.wide ? '0 1.25em' : '0 1.25em'};
	text-decoration: none;
	transform: translateY(0);
  transition: all 0.2s ease;
	white-space: nowrap;

	${space}
	${minWidth}

  & > svg {
    margin-left: ${props => (props.icon ? '0' : '-0.125em')};
    margin-right: ${props => (props.icon ? '0' : '0.75em')};
		margin-top: ${props => (props.icon ? '0' : '-0.125em')};
    opacity: ${props => (props.icon ? '1' : '0.8')};
    height: 1em;
    position: relative;
  }

	&.focus-visible {
		${props =>
      props.transparent
        ? props.theme.name === 'dark'
          ? `background: ${rgba(props.theme.colors.dark[0], 0.35)};`
          : `background: ${rgba(props.theme.colors.dark[4], 0.35)};`
        : null}
		box-shadow: 0 0 0 2px ${props =>
      props.transparent
        ? 'none'
        : props.secondary
          ? rgba(lighten(0.15, props.theme.colors.secondary), 0.95)
          : rgba(lighten(0.15, props.theme.colors.primary), 0.95)};
	}

  &:hover {
    ${props =>
      !props.transparent
        ? `box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.01),
								 0 2px 6px rgba(0, 0, 0, 0.09);`
        : null};
		${props => (props.transparent ? `color: ${props.theme.colors.text};` : null)}
    transform: ${props =>
      props.transparent
        ? null
        : props.wide ? 'translateY(-2px)' : 'translateY(-1px)'};
	}

  &:active {
		${props =>
      !props.transparent ? 'box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.01);' : null}
    transform: none;
  }
`

export const ButtonLink = Button.withComponent(Link)
export const ExternalButtonLink = Button.withComponent('a')

export default Button
