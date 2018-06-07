import { css } from 'styled-components'
import { theme } from 'styled-system'

import woffMontserratBold from '../assets/font/montserrat/montserrat-bold-webfont.woff'
import woff2MontserratBold from '../assets/font/montserrat/montserrat-bold-webfont.woff2'

import woffGravityRegular from '../assets/font/gravity/gravity-regular-webfont.woff'
import woff2GravityRegular from '../assets/font/gravity/gravity-regular-webfont.woff2'

import woffGravityBold from '../assets/font/gravity/gravity-bold-webfont.woff'
import woff2GravityBold from '../assets/font/gravity/gravity-bold-webfont.woff2'

import ttfBarlowSemibold from '../assets/font/barlow/barlow-semibold-webfont.ttf'
import woffBarlowSemibold from '../assets/font/barlow/barlow-semibold-webfont.woff'
import woff2BarlowSemibold from '../assets/font/barlow/barlow-semibold-webfont.woff2'

import woffInconsolataRegular from '../assets/font/inconsolata/inconsolata-regular-webfont.woff'
import woff2InconsolataRegular from '../assets/font/inconsolata/inconsolata-regular-webfont.woff2'

export const logo = `
	font-family: "Montserrat", sans-serif;
	font-weight: 700;
	text-transform: lowercase;
`

export const body = `
	font-family: "Gravity", sans-serif;
`

export const subheading = `
	font-family: "Barlow", sans-serif;
	font-weight: 600;
	letter-spacing: 0.125em;
	text-transform: uppercase;
`

export const monospace = `
	font-family: "Inconsolata", monospace;
`

export const link = css`
  border-bottom: ${theme('colors.contrast.0')} solid 2px;
  color: inherit;
  text-decoration: none;

  &:hover,
  &.focus-visible {
    border-bottom-color: ${theme('colors.primary')};
    transition: border-color 0.1s ease;
  }

  &:active {
    border-bottom-color: ${theme('colors.dark.2')};
  }
`

export const fontFaces = `
	@font-face {
		font-display: swap;
		font-family: "Montserrat";
		font-weight: bold;
		src: url(${woffMontserratBold}),
			url(${woff2MontserratBold});
	}

	@font-face {
		font-display: swap;
		font-family: "Gravity";
		font-weight: normal;
		src: url(${woffGravityRegular}),
			url(${woff2GravityRegular});
	}

	@font-face {
		font-display: swap;
		font-family: "Gravity";
		font-weight: bold;
		src: url(${woffGravityBold}),
			url(${woff2GravityBold});
	}

	@font-face {
		font-display: swap;
		font-family: "Barlow";
		font-weight: 600;
		src: url(${woffBarlowSemibold}),
			url(${woff2BarlowSemibold}),
			url(${ttfBarlowSemibold});
	}
	}

	@font-face {
		font-display: swap;
		font-family: "Inconsolata";
		font-weight: normal;
		src: url(${woffInconsolataRegular}),
			url(${woff2InconsolataRegular});
	}
`
