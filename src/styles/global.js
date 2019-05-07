import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { fontFaces, body } from './typography'
import 'focus-visible'

const GlobalStyles = createGlobalStyle`
	${normalize()}
	${fontFaces}

  * {
		${body}
		outline: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		-webkit-print-color-adjust: exact;
    -webkit-text-size-adjust: 100%;
	}

	b, strong {
		font-weight: bold;
	}

  body {
    font-size: ${props => props.theme.baseFontSize};
    line-height: ${props => props.theme.lineHeights[2]};
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

export default GlobalStyles
