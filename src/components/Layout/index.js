
import { StaticQuery, graphql } from 'gatsby'
import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Twemoji from 'react-twemoji'
import store from 'store'

import { ThemeProvider } from 'styled-components'
import { dark, light } from '../../styles/theme'
import GlobalStyles from '../../styles/global'

import SEO from '../SEO'
import Page, { Content } from '../Page'
import Flex from '../Flex'
import Header from '../Header'
import Footer from '../Footer'
import { LogoLoader } from '../Logo'

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

    const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.siteDescription'
    )
    const defaultCover =
      siteUrl +
      get(this, 'props.data.defaultCover.childImageSharp.fixed.src')
    const author = get(this, 'props.data.site.siteMetadata.author')
    const email = get(this, 'props.data.site.siteMetadata.email')
    const keywords = get(this, 'props.data.site.siteMetadata.keywords')
    const posts = get(this, 'props.data.latestPosts.edges')
    const theme = isDarkMode ? dark : light
    const content = children
    const isLoaded =
      typeof store.storage.name === 'string' &&
      store.storage.name.length > 0 &&
      content
    const url = siteUrl + location.pathname
    const meta = {
      title: 'Digital Craftsman',
      decription: siteDescription,
      image: defaultCover,
      siteTitle: siteTitle
		}

    return (
      <ThemeProvider theme={theme}>
				<Fragment>
					<GlobalStyles theme={theme} />
					<Twemoji>
						<Helmet>
							<meta name="theme-color" content={theme.colors.base} />
							<meta name="author" content={`${author}, ${email}`} />
							<meta name="keywords" content={keywords.join(', ')} />
							<meta name="twitter:card" content="summary" />
							<meta name="twitter:site" content="@nelonoel" />
							<meta property="og:site_name" content={siteTitle} />
							<meta property="og:type" content="website" />
							<meta property="og:url" content={url} />
							<meta
								name="google-site-verification"
								content="1oslh92jui11Q8t62gK2Sya7BMjBbwCAPIRkkDFeorw"
							/>
							<link rel="canonical" href={url} />
							<link rel="stylesheet" href={`/css/syntax-${theme.name}.css`} />
						</Helmet>
						<SEO {...meta} />
						{isLoaded ? (
							<Page>
								<Header
									toggleDarkMode={this.toggleDarkMode}
									isDarkMode={isDarkMode}
								/>
								<Content>{content}</Content>
								<Footer email={email} recent={posts} />
							</Page>
						) : (
							<Page>
								<Flex alignItems="center" flex="1 1 auto" justifyContent="center">
									<LogoLoader />
								</Flex>
							</Page>
						)}
					</Twemoji>
				</Fragment>
      </ThemeProvider>
    )
  }
}

export default ({ location, history, children }) => (
	<StaticQuery
		query={graphql`
			query LayoutQuery {
				site {
					siteMetadata {
						title
						author
						email
						description
						siteUrl
						keywords
					}
				}
				defaultCover: file(relativePath: { eq: "img/default-cover.jpg" }) {
					childImageSharp {
						fixed {
							...GatsbyImageSharpFixed_noBase64
						}
					}
				}
				latestPosts: allMarkdownRemark(
					sort: { fields: [frontmatter___date], order: DESC }
					limit: 5
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
		`}

		render={data => (
			<Template {...{location, history, children, data}} />
		)}
	/>
)
