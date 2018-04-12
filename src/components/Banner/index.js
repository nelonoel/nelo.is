import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Wrapper from '../Wrapper'
import { rgba } from 'polished'

export const BannerContainer = styled.div`
	align-items: center;
  color: ${props => props.theme.text};
  display: flex;
	min-height: 8.5em;
  margin-top: -7em;
  opacity: 0.9;
  padding-top: 8em;
  text-align: center;
  z-index: 0;
`

export const Content = Wrapper.extend``

export const Cover = styled.div`
	height: 16em;
	left: 0;
	pointer-events: none;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: -1;

	&:before,
	&:after {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	&:after {
		background: ${props => rgba(props.theme.base, 0.4)} linear-gradient(transparent, ${props => props.theme.base});
	}

	&:before {
		${props => props.src ? `background-image: url(${props.src});` : null}
		background-attachment: fixed;
		background-blend-mode: luminosity;
		background-color: ${props => props.theme.base};
		background-position:	center center;
		background-size: cover;
		filter: contrast(1.25);
		opacity: 0.2;
	}
`

export const Title = styled.h1`
  font-size: 2.25em;
  line-height: 1.25;
  margin: -0.25em 0 0;
`

export const Subtitle = styled.h2`
	color: ${props => props.theme.contrast4};
	font-weight: normal;
  line-height: 1.25;
  margin: 0;
`

export const Description = styled.p`
	color: ${props => props.theme.contrast5};
  font-size: 1.15em;
  line-height: 1.5;
  margin: 0.125em auto 1.25em;
  max-width: 480px;

  & > a {
    border-bottom: ${props => props.theme.contrast1} solid 2px;
    color: inherit;
    text-decoration: none;

    &:hover, &:focus {
      border-color: ${props => props.theme.primary};
			transition: border-color .1s ease;
    }
  }
`

class Banner extends PureComponent {
	render() {
		const { children, cover } = this.props

		return (
			<BannerContainer>
				{cover && <Cover src={cover} />}
				<Content>
					{children}
				</Content>
			</BannerContainer>
		)
	}
}

export default Banner
