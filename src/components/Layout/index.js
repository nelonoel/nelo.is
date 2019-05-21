import React, { Fragment, useContext } from "react"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"

import { default as Theme, ThemeContext } from "../Theme"
import themes from '../../styles/theme'

import SEO from "../SEO"
import Page, { Content } from "../Page"
import Header from "../Header"
import Footer from "../Footer"

const Layout = props => {
	const theme = themes[useContext(ThemeContext).theme]
  const { location, children } = props

  const siteUrl = get(props, "data.site.siteMetadata.siteUrl")
  const siteTitle = get(props, "data.site.siteMetadata.title")
  const siteDescription = get(props, "data.site.siteMetadata.siteDescription")
  const defaultCover =
    siteUrl + get(props, "data.defaultCover.childImageSharp.fixed.src")
  const author = get(props, "data.site.siteMetadata.author")
  const email = get(props, "data.site.siteMetadata.email")
  const keywords = get(props, "data.site.siteMetadata.keywords")
  const content = children
  const url = siteUrl + location.pathname
  const meta = {
    title: "Digital Craftsman",
    decription: siteDescription,
    image: defaultCover,
    siteTitle: siteTitle,
  }

  return (
    <Fragment>
      <Helmet>
        <meta name="theme-color" content={theme.colors.base} />
				<meta name="theme-color" content={theme.colors.base} />
				<meta name="msapplication-navbutton-color" content={theme.colors.base} />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content={theme.colors.base} />
        <meta name="author" content={`${author}, ${email}`} />
        <meta name="keywords" content={keywords.join(", ")} />
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
      <Page>
        <Header />
        <Content>{content}</Content>
        <Footer />
      </Page>
    </Fragment>
  )
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
      }
    `}
    render={data => (
      <Theme>
        <Layout {...{ location, history, children, data }} />
      </Theme>
    )}
  />
)
