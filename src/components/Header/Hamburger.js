import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-system'

const bar = {
	thickness: '2px'
}

const Icon = styled.div`
  position: relative;
  top: -6px;
  width: 1.15em;

  & > span {
    background: ${theme('colors.text')};
    display: block;
    height: ${bar.thickness};
    left: 0;
    opacity: 1;
    position: absolute;
    transform: rotate(0deg);
		transition: all .2s ease,
								color 0s;
    width: 100%;

    &:nth-child(1) {
      top: 0
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 5px;
    }
    &:nth-child(4) {
      top: 10px;
    }
  }

  ${props => props.isNavOpen ? `
    & > span {
      &:nth-child(1) {
        left: 50%;
        opacity: 0;
        top: ${bar.thickness};
        width: 0%;
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
      }
      &:nth-child(4) {
        left: 50%;
        opacity: 0;
        top: ${bar.thickness};
        width: 0%;
      }
    }
  ` : null}
`

class Hamburger extends PureComponent {
	render() {
		const { isNavOpen } = this.props
		return (
			<Icon isNavOpen={isNavOpen}>
				<span />
				<span />
				<span />
				<span />
			</Icon>
		)
	}
}

export default Hamburger
