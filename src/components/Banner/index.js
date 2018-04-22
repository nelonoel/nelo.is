import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import Img from 'gatsby-image'
import Wrapper from '../Wrapper'

export const BannerContainer = styled.div`
	align-items: center;
  color: ${props => props.theme.colors.text};
  display: flex;
	min-height: 8.5em;
  margin-top: -7em;
  opacity: 0.9;
  padding-top: 8em;
  text-align: center;
  z-index: 0;

	.cover {
		left: 0;
		pointer-events: none;
		position: absolute !important;
		top: 0;
		width: 100%;
		z-index: -1;
	}
`

export const Content = Wrapper.extend``

export const Cover = styled(Img) `
	height: 16em;

	img {
		z-index: -1;
	}

	&:before,
	&:after {
    bottom: 0;
    height: 100%;
    left: 0;
    width: 100%;
    z-index: 0;
    content: '';
    display: block;
    position: absolute;
    top: 0;
	}

	&:after {
		background: ${props => props.theme.name === 'dark' ? rgba(props.theme.colors.base, 0.75) : rgba(props.theme.colors.base, 0.375)} linear-gradient(transparent, ${props => props.theme.colors.base});
	}

	&:before {
		background-color: ${props => props.theme.colors.base};
		mix-blend-mode: luminosity;
		opacity: 0.6;
	}
`

export const Title = styled.h1`
  font-size: 2.25em;
  line-height: 1.25;
  margin: -0.25em 0 0;
`

export const Subtitle = styled.h2`
	color: ${props => props.theme.colors.contrast[3]};
	font-weight: normal;
  line-height: 1.25;
  margin: 0;
`

export const Description = styled.p`
	color: ${props => props.theme.colors.contrast[4]};
  font-size: 1.15em;
  line-height: 1.5;
  margin: 0.125em auto 1.25em;
  max-width: 480px;

  & > a {
    border-bottom: ${props => props.theme.colors.contrast[0]} solid 2px;
    color: inherit;
    text-decoration: none;

    &:hover, &:focus {
      border-color: ${props => props.theme.colors.primary};
			transition: border-color .1s ease;
    }
  }
`

class Banner extends PureComponent {
	render() {
		const { children, cover } = this.props

		return (
			<BannerContainer>
				{cover && <Cover sizes={cover} outerWrapperClassName="cover" />}
				<Content>
					{children}
				</Content>
			</BannerContainer>
		)
	}
}

export default Banner
