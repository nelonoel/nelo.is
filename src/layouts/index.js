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

		const siteUrl = get(props, 'data.site.siteMetadata.siteUrl')
		const defaultCover = siteUrl + get(props, 'data.defaultCover.childImageSharp.resolutions.src')

		this.state = {
			isDarkMode: store.get('dark_mode'),
			cover: defaultCover,
			title: 'Digital Craftsman',
			description: 'I\'m Nelo — a digital craftsman focusing on front - end development & UI design.I work with companies around the world to make delightful digital products.',
			type: 'page'
		}
	}

	toggleDarkMode() {
		store.set('dark_mode', !this.state.isDarkMode)
		this.setState({
			isDarkMode: !this.state.isDarkMode
		})
	}

	setMeta(data) {
		const defaultMeta = {
			title: 'Digital Craftsman',
			description: 'I\'m Nelo — a digital craftsman focusing on front - end development & UI design.I work with companies around the world to make delightful digital products.',
			type: 'page'
		}

		this.setState(Object.assign(defaultMeta, data))
	}

	render() {
		const { location, children } = this.props
		const { cover, title, description, type, isDarkMode } = this.state
		const posts = get(this, 'props.data.latestPosts.edges')
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
		const defaultCover = siteUrl + get(this, 'props.data.defaultCover.childImageSharp.resolutions.src')
		const author = get(this, 'props.data.site.siteMetadata.author')
		const email = get(this, 'props.data.site.siteMetadata.email')
		const theme = isDarkMode ? dark : light
		const setMeta = this.setMeta.bind(this)
		const content = children({ ...this.props, setMeta })
		const isLoaded = typeof store.storage.name === 'string' && store.storage.name.length > 0 && content
		const pageTitle = type === 'post' ? `${title} • ${siteTitle}` : `${siteTitle} • ${title}`

		return (
			<ThemeProvider theme={theme}>
				<Twemoji>
					<Helmet title={pageTitle}>
						<meta name="theme-color" content={theme.colors.base} />
						<meta name="author" content={`${author}, ${email}`} />
						<meta name="description" content={description} />
						<meta name="twitter:card" content="summary" />
						<meta name="twitter:site" content="@nelonoel" />
						<meta name="og:image" content={cover} />
						<meta name="og:site_name" content={siteTitle} />
						<meta name="og:title" content={title} />
						<meta name="og:description" content={description} />
						<meta name="og:type" content="website" />
						<meta name="google-site-verification" content="1oslh92jui11Q8t62gK2Sya7BMjBbwCAPIRkkDFeorw" />
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
				title
				author
				email
				siteUrl
			}
		}
		defaultCover: file(relativePath: { eq: "img/default-cover.jpg" }) {
      childImageSharp {
        resolutions {
          ...GatsbyImageSharpResolutions_noBase64
        }
      }
		}
    latestPosts: allMarkdownRemark(
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
