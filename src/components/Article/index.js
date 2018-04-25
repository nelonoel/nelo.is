import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-system'
import { darken, lighten } from 'polished'
import { monospace, subheading, link } from '../../styles/typography'

const Article = styled.article`
	${props => require(`../../styles/syntax-${props.theme.name}.css`)}
	font-size: 1.1em;
	position: relative;

	a {
		${link}
	}

  a.absent {
    color: #cc0000;
  }

  a.anchor {
    display: block;
    padding-left: 30px;
    margin-left: -30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 20px 0 10px;
    padding: 0;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    cursor: text;
    position: relative;
  }

  h1:hover a.anchor,
  h2:hover a.anchor,
  h3:hover a.anchor,
  h4:hover a.anchor,
  h5:hover a.anchor,
  h6:hover a.anchor {
    text-decoration: none;
  }

  h1 tt,
  h1 code {
    font-size: inherit;
  }

  h2 tt,
  h2 code {
    font-size: inherit;
  }

  h3 tt,
  h3 code {
    font-size: inherit;
  }

  h4 tt,
  h4 code {
    font-size: inherit;
  }

  h5 tt,
  h5 code {
    font-size: inherit;
  }

  h6 tt,
  h6 code {
    font-size: inherit;
  }

  h1 {
    font-size: 2em;
    color: ${theme('colors.text')};
  }

  h2 {
    font-size: 1.75em;
    color: ${theme('colors.text')};
  }

  h3 {
    font-size: 1.5em;
  }

  h4 {
    font-size: 1.25em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
		${subheading}
		color: ${theme('colors.contrast.2')};
		font-size: 0.85em;
		letter-spacing: 0.0612em;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  li,
  table,
  pre {
    margin: 15px 0;
  }

  hr {
		background: ${theme('colors.dark.0')};
    border: 0 none;
    height: 4px;
    padding: 0;
  }

  body > h2:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  body > h1:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  body > h1:first-child + h2 {
    margin-top: 0;
    padding-top: 0;
  }

  body > h3:first-child,
  body > h4:first-child,
  body > h5:first-child,
  body > h6:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  a:first-child h1,
  a:first-child h2,
  a:first-child h3,
  a:first-child h4,
  a:first-child h5,
  a:first-child h6 {
    margin-top: 0;
    padding-top: 0;
  }

  h1 p,
  h2 p,
  h3 p,
  h4 p,
  h5 p,
  h6 p {
    margin-top: 0;
  }

  li p.first {
    display: inline-block;
  }

  li {
    margin: 0;
  }

  ul,
  ol {
    padding-left: 30px;
  }

  ul :first-child,
  ol :first-child {
    margin-top: 0;
  }

  dl {
    padding: 0;
  }

  dl dt {
    font-weight: bold;
    font-style: italic;
    padding: 0;
    margin: 15px 0 5px;
  }

  dl dt:first-child {
    padding: 0;
  }

  dl dt > :first-child {
    margin-top: 0;
  }

  dl dt > :last-child {
    margin-bottom: 0;
  }

  dl dd {
    margin: 0 0 15px;
    padding: 0 15px;
  }

  dl dd > :first-child {
    margin-top: 0;
  }

  dl dd > :last-child {
    margin-bottom: 0;
  }

  blockquote {
    border-left: 4px solid ${theme('colors.primary')};
    font-size: 1.15em;
    padding: 0.25em 1em;

    & > p {
      color: ${props => lighten(0.25, props.theme.colors.text)};
    }
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  table {
    padding: 0;
    border-collapse: collapse;
  }

  table tr {
    border-top: 1px solid #cccccc;
    background-color: white;
    margin: 0;
    padding: 0;
  }

  table tr:nth-child(2n) {
    background-color: #f8f8f8;
  }

  table tr th {
    font-weight: bold;
    border: 1px solid #cccccc;
    margin: 0;
    padding: 6px 13px;
  }

  table tr td {
    border: 1px solid #cccccc;
    margin: 0;
    padding: 6px 13px;
  }

  table tr th :first-child,
  table tr td :first-child {
    margin-top: 0;
  }

  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
  }

  span.frame {
    display: block;
    overflow: hidden;
  }

  span.frame > span {
    border: 1px solid #dddddd;
    display: block;
    float: left;
    overflow: hidden;
    margin: 13px 0 0;
    padding: 7px;
    width: auto;
  }

  span.frame span img {
    display: block;
    float: left;
  }

  span.frame span span {
    clear: both;
    color: #333333;
    display: block;
    padding: 5px 0 0;
  }

  span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-center > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: center;
  }

  span.align-center span img {
    margin: 0 auto;
    text-align: center;
  }

  span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-right > span {
    display: block;
    overflow: hidden;
    margin: 13px 0 0;
    text-align: right;
  }

  span.align-right span img {
    margin: 0;
    text-align: right;
  }

  span.float-left {
    display: block;
    margin-right: 13px;
    overflow: hidden;
    float: left;
  }

  span.float-left span {
    margin: 13px 0 0;
  }

  span.float-right {
    display: block;
    margin-left: 13px;
    overflow: hidden;
    float: right;
  }

  span.float-right > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: right;
  }

  code,
  tt {
		${monospace}
    margin: 0 2px;
    padding: 0 5px;
    white-space: nowrap;
    background: ${props => darken(0.075, props.theme.colors.base)};
    color: ${theme('colors.text')};
  }

  pre code {
		${monospace}
    margin: 0;
    padding: 0;
    white-space: pre;
    border: none;
    background: transparent;
  }

  .gatsby-highlight pre {
		${monospace}
    border: ${props => lighten(0.03, props.theme.colors.dark[2])} solid 2px;
    overflow: auto;
	}

	.ui-screenshot .gatsby-resp-image-wrapper {
		border-radius: ${theme('radii.1')};
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.025),
								0 1px 3px rgba(0, 0, 0, 0.05),
								0 2px 6px rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}

	.transparent .gatsby-resp-image-background-image {
		background-image: none !important;
	}

	.gatsby-resp-image-wrapper {
		margin: 2rem auto;
	}

	figcaption {
		color: ${theme('colors.contrast.3')};
		font-size: 0.8em;
		margin: -1.25rem auto 2rem;
		padding: 0 1em;
		text-align: center;

		* {
			color: ${theme('colors.contrast.3')};
		}
	}

	.grid {
		display: grid;
		margin: 2rem auto;

		.gatsby-resp-image-wrapper {
			margin: 0;
		}

		.ui-screenshot + figcaption {
			margin-top: 1em
		}

		&.two-column {
			grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
			grid-gap: 1em;
		}

		&.three-column {
			grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
			grid-gap: 1em;
		}
	}

  pre {
		background-color: ${theme('colors.white')};
    line-height: 1.4;
    overflow: auto;
    padding: 0.75em 1em;
	}

	pre * {
		${monospace}
		font-size: 1.2rem;
	}

  pre code,
  pre tt {
		${monospace}
    background-color: transparent;
		border: none;
		font-size: 1.2rem;
  }

  sup {
    font-size: 0.83em;
    vertical-align: super;
    line-height: 0;
  }

  @media screen and (min-width: 914px) {
    body {
      margin: 0 auto;
    }
  }

  @media print {
    table,
    pre {
      page-break-inside: avoid;
    }
    pre {
      word-wrap: break-word;
    }
	}
`

export default Article
