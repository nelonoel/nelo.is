import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-system'
import { rgba, darken } from 'polished'
import Img from 'gatsby-image'

import Box from '../Box'
import Parallax from 'react-rellax'

const Window = styled(Box)`
  background: #ebeceb;
  border: ${props => darken(0.03, props.theme.colors.light[4])} solid 0.2em;
  border-bottom: none;
  border-top-left-radius: ${theme('radii.2')};
  border-top-right-radius: ${theme('radii.2')};
  box-shadow: 0 1px 3px ${props => rgba(props.theme.colors.black, 0.0306)},
    0 5px 25px ${props => rgba(props.theme.colors.black, 0.125)},
    0 20px 100px ${props => rgba(props.theme.colors.black, 0.25)};
  overflow: hidden;

  @media (max-width: ${theme('breakpoints.1')}) {
    background: #262e3d;
    border-top-left-radius: ${theme('radii.3')};
    border-top-right-radius: ${theme('radii.3')};
  }
`

const Frame = Box.extend.attrs({
  bg: 'light.4',
  color: 'contrast.1',
  height: '1.75em',
  px: 2,
  textAlign: 'left',
  width: '100%'
})`
	box-shadow: inset 0 -1em 2em ${props =>
    darken(0.03, props.theme.colors.light[4])}, 0 1px 1px rgba(0, 0, 0, 0.125);
	position: relative;
	z-index: 1;

	&:before {
		content: '•••';
		font-size: ${theme('fontSizes.5')};
		line-height: 0.6;
	}

	@media (max-width: ${theme('breakpoints.1')}) {
		color: ${theme('colors.dark.2')};
		text-align: center;

		&:before {
			content: '–––';
			letter-spacing: -0.25em;
		}

		&:after {
			content: '•';
			font-size: 1.5em;
			left: 0.45em;
			line-height: 0;
			position: relative;
			top: -0.15em;
		}
	}
`

export default class Screen extends PureComponent {
  render() {
    const { screens, height, width } = this.props

    return (
      <Window height={height} width={width}>
        <Frame />
        <Parallax speed={10}>
          <Box display={['none', 'none', 'block']}>
            <Img
              sizes={screens.desktop}
              alt="Desktop Screenshot"
              title="Desktop Screenshot"
            />
          </Box>
          <Box display={['block', 'block', 'none']}>
            <Img
              sizes={screens.mobile}
              alt="Mobile Screenshot"
              title="Mobile Screenshot"
            />
          </Box>
        </Parallax>
      </Window>
    )
  }
}

Screen.defaultProps = {
  height: '24em',
  width: '100%'
}
