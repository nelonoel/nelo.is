import { css } from 'styled-components'

import woffMontserratBold from '../../static/font/montserrat/montserrat-bold-webfont.woff'
import woff2MontserratBold from '../../static/font/montserrat/montserrat-bold-webfont.woff2'

import woffGravityRegular from '../../static/font/gravity/gravity-regular-webfont.woff'
import woff2GravityRegular from '../../static/font/gravity/gravity-regular-webfont.woff2'

import ttfBarlowSemibold from '../../static/font/barlow/barlow-semibold-webfont.ttf'
import woffBarlowSemibold from '../../static/font/barlow/barlow-semibold-webfont.woff'
import woff2BarlowSemibold from '../../static/font/barlow/barlow-semibold-webfont.woff2'

import woffInconsolataRegular from '../../static/font/inconsolata/inconsolata-regular-webfont.woff'
import woff2InconsolataRegular from '../../static/font/inconsolata/inconsolata-regular-webfont.woff2'

export const logo = css`
	font-family: "Montserrat", sans-serif;
	font-weight: 700;
	text-transform: lowercase;
`

export const body = css`
	font-family: "Gravity", sans-serif;
`

export const subheading = css`
	font-family: "Barlow", sans-serif;
	font-weight: 600;
	text-transform: uppercase;
`

export const monospace = css`
	font-family: "Inconsolata", monospace;
`

export const fontFaces = `
	@font-face {
		font-family: "Montserrat";
		font-weight: bold;
		src: url(${woffMontserratBold}),
			url(${woff2MontserratBold});
	}

	@font-face {
		font-family: "Gravity";
		font-weight: normal;
		src: url(${woffGravityRegular}),
			url(${woff2GravityRegular});
	}

	@font-face {
		font-family: "Barlow";
		font-weight: 600;
		src: url(${woffBarlowSemibold}),
			url(${woff2BarlowSemibold}),
			url(${ttfBarlowSemibold});
	}
	}

	@font-face {
		font-family: "Inconsolata";
		font-weight: normal;
		src: url(${woffInconsolataRegular}),
			url(${woff2InconsolataRegular});
	}
`
