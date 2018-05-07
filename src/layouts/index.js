import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Twemoji from 'react-twemoji'
import store from 'store'

import styled, { ThemeProvider } from 'styled-components'
import { dark, light } from '../styles/theme'

import Page, { Content } from '../components/Page'
import Flex from '../components/Flex'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { LogoLoader } from '../components/Logo'

class Template extends Component {
	constructor(props) {
		super(props)
		this.toggleDarkMode = this.toggleDarkMode.bind(this)
		this.state = {
			isDarkMode: store.get('dark_mode')
		}
	}

	toggleDarkMode() {
		store.set('dark_mode', !this.state.isDarkMode)
		this.setState({
			isDarkMode: !this.state.isDarkMode
		})
	}

	render() {
		const { location, children } = this.props
		const { isDarkMode } = this.state
		const posts = get(this, 'props.data.allMarkdownRemark.edges')
		const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
		const pageCover = siteUrl + get(this, 'props.data.pageCover.childImageSharp.resolutions.src')
		const author = get(this, 'props.data.site.siteMetadata.author')
		const email = get(this, 'props.data.site.siteMetadata.email')
		const theme = isDarkMode ? dark : light
		const content = children()
		const isLoaded = typeof store.storage.name === 'string' && store.storage.name.length > 0 && content

		return (
			<ThemeProvider theme={theme}>
				<Twemoji>
					<Helmet>
						<meta name="theme-color" content={theme.colors.base} />
						<meta name="author" content={`${author}, ${email}`} />
						<meta property="twitter:card" content="summary" />
						<meta property="twitter:site" content="@nelonoel" />
						<meta property="og:image" content={pageCover} />
						<meta property="og:type" content="website" />
						<link rel="stylesheet" href={`/css/syntax-${theme.name}.css`} />
					</Helmet>
					{isLoaded
						? <Page>
							<Header
								toggleDarkMode={this.toggleDarkMode}
								isDarkMode={isDarkMode}
							/>
							<Content>{content}</Content>
							<Footer email={email} recent={posts} />
						</Page>
						: <Page><Flex alignItems="center" flex="1 1 auto" justifyContent="center"><LogoLoader /></Flex></Page>
					}
				</Twemoji>
			</ThemeProvider>
		)
	}
}

export default Template

export const pageQuery = graphql`
  query LayoutQuery {
		site {
			siteMetadata {
				author
				email
				siteUrl
			}
		}
		pageCover: file(relativePath: { eq: "img/default-cover.jpg" }) {
      childImageSharp {
        resolutions {
          ...GatsbyImageSharpResolutions_noBase64
        }
      }
		}
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      limit: 5,
      filter: { frontmatter: { model: { ne: "project" }, draft: { ne: true } } }
    ) {
      edges {
        node {
					id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
