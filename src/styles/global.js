import { injectGlobal } from 'styled-components'
import { selection } from 'polished'
import { light as theme } from '../styles/theme'

injectGlobal`
  * {
    font-family: "Gravity", "San Francisco Display",
      -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans",
			"Droid Sans", "Helvetica Neue", sans-serif;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
		-webkit-font-smoothing: antialiased;

		&:focus {
			outline: none;
		}
  }

  body {
    font-size: 18px;
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
