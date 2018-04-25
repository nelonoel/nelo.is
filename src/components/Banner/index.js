import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-system'
import { rgba } from 'polished'
import Img from 'gatsby-image'

import { cover } from '../../styles/mixins'
import Wrapper from '../Wrapper'

export const Container = styled.div`
	align-items: center;
  color: ${theme('colors.text')};
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

	@media (max-width: ${theme('breakpoints.1')}) {
		margin-top: 0;
		padding-top: 2.5em;
	}
`

export const Cover = styled(Img) `
	height: 16em;

	img {
		z-index: -1;
	}

	&:before,
	&:after {
		${cover}
    height: 100%;
    width: 100%;
    z-index: 0;
    content: '';
    display: block;
	}

	&:after {
		background: ${props => props.theme.name === 'dark' ? rgba(props.theme.colors.base, 0.75) : rgba(props.theme.colors.base, 0.375)} linear-gradient(transparent, ${theme('colors.base')});
	}

	&:before {
		background-color: ${theme('colors.base')};
		opacity: 0.65;
	}
`

export const Title = styled.h1`
  font-size: 2.25em;
  line-height: 1.25;
  margin: -0.25em 0 0;
`

export const Subtitle = styled.h2`
	color: ${theme('colors.contrast.3')};
	font-weight: normal;
  line-height: 1.25;
  margin: 0;
`

export const Description = styled.p`
	color: ${theme('colors.contrast.4')};
  font-size: 1.15em;
  line-height: 1.5;
  margin: 0.125em auto 1.25em;
  max-width: ${theme('wrapper.normal')}em;

  & > a {
    border-bottom: ${theme('colors.contrast.0')} solid 2px;
    color: inherit;
    text-decoration: none;

    &:hover, &:focus {
      border-color: ${theme('colors.primary')};
			transition: border-color .1s ease;
    }
  }
`

class Banner extends PureComponent {
	render() {
		const { children, cover } = this.props

		return (
			<Container>
				{cover && <Cover sizes={cover} outerWrapperClassName="cover" />}
				<Wrapper>
					{children}
				</Wrapper>
			</Container>
		)
	}
}

export default Banner
