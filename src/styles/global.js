import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import { light as theme } from '../styles/theme'
import { fontFaces, body } from '../styles/typography'

injectGlobal`
	${normalize()}
	${fontFaces}

  * {
		${body}
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		-webkit-print-color-adjust: exact;
    -webkit-text-size-adjust: 100%;

		&:focus {
			outline: none;
		}
	}

	b, strong {
		font-weight: bold;
	}

  body {
    font-size: ${theme.baseFontSize};
    line-height: ${theme.lineHeights[2]};
    margin: 0;
    padding: 0;
  }

  .emoji {
    height: 1em;
    margin: 0 0.15em;
    position: relative;
    top: 0.15em;
  }
`
