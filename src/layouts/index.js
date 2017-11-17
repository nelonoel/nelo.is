import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Twemoji from 'react-twemoji'

import styled, { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import globalStyles from '../styles/global'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
`

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <ThemeProvider theme={theme}>
        <Twemoji>
          <Page>
            <Header />
            <Content>
              {children()}
            </Content>
            <Footer recent={posts} />
          </Page>
        </Twemoji>
      </ThemeProvider>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query RecentArticlesQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      limit: 6,
      filter: { frontmatter: { model: { ne: "project" } } }
    ) {
      edges {
        node {
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
