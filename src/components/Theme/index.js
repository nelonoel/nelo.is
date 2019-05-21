import React, { Fragment, createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Twemoji from 'react-twemoji'
import store from 'store'

import themes from '../../styles/theme'
import GlobalStyles from '../../styles/global'

export const ThemeContext = createContext()

const Theme = props => {
	const [theme, setTheme] = useState(store.get('theme') || 'light')
	const { children } = props

	const toggleTheme = name => {
		store.set('theme', name)
		setTheme(name)
	}

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
