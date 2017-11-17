import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    font-family: "San Francisco Display", -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: #f5f8fa;
    font-size: 18px;
    line-height: 1.6;
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
