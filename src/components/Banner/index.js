import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-system'
import { rgba } from 'polished'
import Img from 'gatsby-image'
import Twemoji from 'react-twemoji'

import { cover } from '../../styles/mixins'
import Subheading from '../Subheading'
import Flex from '../Flex'

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

export const Type = Subheading.extend`
  color: ${theme('colors.contrast.3')};
  line-height: 3;
  margin: 0;
  opacity: 0.75;
`

export const Cover = styled(Img)`
	height: 16em;

	img {
		z-index: -1;
	}

	&:before,
	&:after {
		${cover}
		background-color: ${theme('colors.base')};
    height: 100%;
    width: 100%;
    z-index: 0;
    content: '';
    display: block;
	}

	&:after {
		background: linear-gradient(${props =>
      props.theme.name === 'dark'
        ? rgba(props.theme.colors.base, 0.75)
        : rgba(props.theme.colors.base, 0.375)}, ${theme('colors.base')});
	}

	&:before {
		opacity: 0.65;
	}
`

export const Emoji = styled(Twemoji).attrs({
  options: {
    ext: '.svg',
    folder: 'svg'
  }
})`
  font-size: 6em;
  font-weight: bold;

  & > img {
    margin: auto;
  }
`

export const Title = styled.h1`
  font-size: 2.15em;
  line-height: 1.25;
  margin: -0.25em 0 0;
`

export const Subtitle = styled.h2`
  color: ${theme('colors.contrast.3')};
  font-size: ${theme('fontSizes.2')};
  font-weight: normal;
  line-height: ${theme('lineHeights.1')};
  margin: 0.125em auto 1.25em;
`

export const Description = Subtitle.extend`
  max-width: ${theme('wrapper.normal')};
`.withComponent('p')

export const Meta = Subtitle.extend`
  color: ${theme('colors.contrast.2')};
  display: flex;
  font-size: 0.75em;
  font-weight: bold;
  letter-spacing: 0.0612em;
  justify-content: center;
  text-transform: uppercase;
  max-width: ${theme('wrapper.normal')};
  overflow: hidden;

  & > div {
    white-space: nowrap;

    &:not(:last-child) {
      margin-right: 0.75em;

      &:after {
        content: '•';
        display: inline-block;
        margin-left: 0.75em;
        opacity: 0.25;
      }
    }
  }

  & svg {
    height: 1em;
    margin: 0 0.5em -0.125em 0;
  }
`.withComponent('div')

class Banner extends PureComponent {
  render() {
    const { children, cover } = this.props

    return (
      <Container>
        {cover && (
          <Cover
            sizes={cover}
            outerWrapperClassName="cover"
            alt="Cover Image"
            title="Cover Image"
          />
        )}
        <Flex flex="1" flexDirection="column">
          {children}
        </Flex>
      </Container>
    )
  }
}

export default Banner
