import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.transparent ? 'none' :
    props.inverted ? props.theme.white :
    props.secondary ? props.theme.secondary :
    props.theme.primary};
  border: none;
  border-radius: ${props => props.sharp ? 0 : props.theme.borderRadius};
  box-shadow: ${props => props.transparent ? 'none' : '0 1px 1px rgba(0, 0, 0, 0.1)'};
  color: ${props => props.transparent || props.inverted ?
    props.secondary ? props.theme.secondary :
    props.theme.primary : props.theme.white};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-size: 1em;
  font-weight: 500;
  margin-right: 0.5em;
  outline: none;
  padding: ${props => props.icon ? '0.7em' : '0.5em 1.5em'};
  text-decoration: none;
  transition: all .2s ease;

  & > svg {
    margin-left: ${props => props.icon ? '0' : '-0.125em'};
    margin-right: ${props => props.icon ? '0' : '0.75em'};
    opacity: ${props => props.icon ? '1' : '0.8'};
    height: 1.15em;
    position: relative;
    top: -0.0612em;
  }

  &:hover {
    background: ${props => props.transparent ? 'rgba(0, 0, 0, 0.025)' : null};
    box-shadow: ${props => props.transparent ? null : '0 2px 4px rgba(0, 0, 0, 0.075)'};
    transform: ${props => props.transparent ? null : 'translateY(-1px)'};
  }

  &:active {
    box-shadow: none;
    transform: none;
  }
`

export const ButtonLink = Button.withComponent(Link)

export default Button
