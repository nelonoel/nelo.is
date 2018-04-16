import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Button = styled.button`
  align-items: center;
  background: ${props =>
		props.transparent
			? 'none'
			: props.inverted
				? props.theme.white
				: props.secondary ? props.theme.secondary : props.theme.primary};
  border: none;
  border-radius: ${props => (props.sharp ? 0 : props.theme.borderRadius)};
  box-shadow: ${props =>
		props.transparent ? 'none' : '0 1px 1px rgba(0, 0, 0, 0.1)'};
  box-sizing: border-box;
  color: ${props =>
		props.transparent || props.inverted
			? props.secondary ? props.theme.secondary : props.theme.primary
			: props.theme.white};
  cursor: pointer;
  display: inline-flex;
  font-size: 0.95em;
	font-weight: normal;
	justify-content: ${props => props.wide ? 'center' : null};
  line-height: ${props => props.wide ? 3 : 2.4};
	margin-right: ${props => props.wide ? null : '0.5em'};
  padding: ${props => (props.icon ? '1em' : props.wide ? '0 1.25em' : '0 1.25em')};
	text-decoration: none;
	transform: translateY(0);
  transition: all 0.2s ease;

  & > svg {
    margin-left: ${props => (props.icon ? '0' : '-0.125em')};
    margin-right: ${props => (props.icon ? '0' : '0.75em')};
		margin-top: ${props => (props.icon ? '0' : '-0.125em')};
    opacity: ${props => (props.icon ? '1' : '0.8')};
    height: 1em;
    position: relative;
  }

  &:hover, &:focus {
    background: ${props => (props.transparent ? 'rgba(0, 0, 0, 0.025)' : null)};
    box-shadow: ${props =>
		props.transparent ? null : '0 2px 4px rgba(0, 0, 0, 0.075)'};
    transform: ${props => (props.transparent ? null : props.wide ? 'translateY(-2px)' : 'translateY(-1px)')};
	}

  &:active {
    box-shadow: none;
    transform: none;
  }
`

export const ButtonLink = Button.withComponent(Link)

export default Button
