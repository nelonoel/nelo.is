import React, { Fragment, createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Twemoji from 'react-twemoji'
import store from 'store'
import useEventListener from '@use-it/event-listener'

import themes from '../../styles/theme'
import GlobalStyles from '../../styles/global'

export const ThemeContext = createContext()

const Theme = props => {
	const mql = global.matchMedia ? global.matchMedia('(prefers-color-scheme: dark)') : {}
	const [theme, setTheme] = useState(store.get('theme') || 'light')
	const toggleTheme = name => {
		store.set('theme', name)
		setTheme(name)
	}
	const { children } = props

	useEventListener(
		'change',
		({ matches }) => toggleTheme(matches ? 'dark' : 'light'), {
			addEventListener: (_, handler) => mql.addListener && mql.addListener(handler),
			removeEventListener: (_, handler) => mql.removeListener && mql.removeListener(handler)
		}
	)

	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			<ThemeProvider theme={themes[theme]}>
				<Fragment>
					<GlobalStyles />
					<Twemoji>
						{children}
					</Twemoji>
				</Fragment>
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}

export default Theme
