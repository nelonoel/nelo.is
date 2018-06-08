import React, { Component } from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Twemoji from 'react-twemoji'
import store from 'store'

import styled, { ThemeProvider } from 'styled-components'
import { dark, light } from '../styles/theme'

import SEO from '../components/SEO'
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

    const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.siteDescription'
    )
    const defaultCover =
      siteUrl +
      get(this, 'props.data.defaultCover.childImageSharp.resolutions.src')
    const author = get(this, 'props.data.site.siteMetadata.author')
    const email = get(this, 'props.data.site.siteMetadata.email')
    const keywords = get(this, 'props.data.site.siteMetadata.keywords')
    const posts = get(this, 'props.data.latestPosts.edges')
    const theme = isDarkMode ? dark : light
    const content = children()
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
        description
        siteUrl
        keywords
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
`
