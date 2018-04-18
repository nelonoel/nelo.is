import { darken, lighten } from 'polished'
import assign from 'lodash/assign'

const deriveColors = base => {
	return {
		dark3: darken(0.1, base),
		dark2: darken(0.05, base),
		dark1: darken(0.025, base),

		light3: lighten(0.1, base),
		light2: lighten(0.05, base),
		light1: lighten(0.025, base)
	}
}

const defaults = {
	white: '#fff',
	black: '#10161a',
	primary: '#eb532d',
	secondary: '#43bf4d',
	selection: '#ffe200',

	baseFontSize: '18px',
	borderRadius: '5px',
	containerWidth: '51rem'
}

const breakpoints = {
	mobile: '21em',
	tablet: '27em',
	container: '38em'
}

const lightColors = {
	name: 'light',

	base: '#f5f8fa',
	contrast1: '#e1e8ed',
	contrast2: '#ced9e0',
	contrast3: '#a7b6c2',
	contrast4: '#738694',
	contrast5: '#394b59',
	text: '#293742',
}

const darkColors = {
	name: 'dark',

	base: '#293742',
	contrast1: '#394b59',
	contrast2: '#738694',
	contrast3: '#a7b6c2',
	contrast4: '#ced9e0',
	contrast5: '#e1e8ed',
	text: '#fff',
}

export const light = assign(
	lightColors,
	deriveColors(lightColors.base),
	defaults,
	{ breakpoints }
)

export const dark = assign(
	darkColors,
	deriveColors(darkColors.base),
	defaults,
	{ breakpoints }
)
