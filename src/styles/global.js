import { injectGlobal } from 'styled-components'
import { normalize, selection } from 'polished'
import { light as theme } from '../styles/theme'
import { fontFaces, body } from '../styles/typography'

injectGlobal`
	${normalize()}
	${fontFaces}

  * {
		${body}

    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
		-webkit-font-smoothing: antialiased;

		&:focus {
			outline: none;
		}
	}

	b, strong {
		font-weight: bold;
	}

  body {
    font-size: ${theme.baseFontSize};
    font-size: calc(0.18vw + 16px);
    line-height: 1.6;
    margin: 0;
    padding: 0;

    ${selection({ 'backgroundColor': theme.selection }, '*')}
  }

  .emoji {
    height: 1em;
    margin: 0 0.15em;
    position: relative;
    top: 0.15em;
  }
`
