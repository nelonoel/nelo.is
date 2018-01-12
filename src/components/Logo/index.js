import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    animation-timing-function: ease-out;
		transform: translate3d(0,0,0);
  }

  25%, 53%, 80% {
		transform: scaleY(0.6) translate3d(0,0,0);
  }

  40%, 43% {
		animation-timing-function: ease-in;
    transform: translate3d(0, -20px, 0);
  }

  70% {
		animation-timing-function: ease-in;
    transform: translate3d(0, -12px, 0);
  }

  90% {
    transform: translate3d(0,-8px,0);
  }

  to {
    animation-timing-function: ease-out;
  }
`

const shadow = keyframes`
  from, 20%, 53%, 80%, to {
		animation-timing-function: ease-out;
		transform: scaleY(0);
  }

  40%, 43% {
		animation-timing-function: ease-in;
    transform: scaleY(0.35);
  }

  53%, 80% {
		transform: scaleY(0.6);
  }

  70% {
		animation-timing-function: ease-in;
    transform: scaleY(0.27);
  }

  to {
    animation-timing-function: ease-out;
  }
`

export const Dot = styled.span`
	font-size: 1.25em;
	position: relative;

	&:before,
	&:after {
		animation: none;
		content: '.';
		display: inline-flex;
		transform-origin: bottom;
	}

	&:before {
		color: ${props => props.theme.primary};
		position: absolute;
	}

	&:after {
		color: rgba(0, 0, 0, 0.15);
	}
`

const Title = styled.h1`
  display: inline-flex;
  line-height: 1;
  margin: -0.25em 0 0;
  white-space: nowrap;
  z-index: 1;

  * {
    font-family: 'Montserrat';
    text-transform: lowercase;
  }

  a {
    color: ${props => props.theme.text};
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: -0.0362em;
    text-decoration: none;

    &:hover {
      & > ${Dot} {
				&:before {
					animation: ${bounce} 2s 1;
				}
				&:after {
					animation: ${shadow} 2s 1;
				}
      }
    }
  }
`

class Logo extends PureComponent {
	render() {
		return (
			<Title>
				<Link to="/">
					Nelo
          <Dot />
				</Link>
			</Title>
		)
	}
}

export default Logo
