import { graphql } from 'gatsby'
import React, { PureComponent } from 'react'
import get from 'lodash/get'
import Layout from '../components/Layout'

import Banner from '../sections/Home/Banner'
import LatestPost from '../sections/Home/LatestPost'
import Services from '../sections/Home/Services'
import FeaturedProject from '../sections/Home/FeaturedProject'
import RecentWork from '../sections/Home/RecentWork'
import Clients from '../sections/Home/Clients'
import ForHire from '../sections/ForHire'

class Home extends PureComponent {
  render() {
		const { history, location } = this.props
    const landingCover = get(
      this,
      'props.data.landingCover.childImageSharp.fixed.src'
    )

    return (
      <Layout {...{ history, location }}>
        <Banner cover={landingCover} />
        <LatestPost />
        <Services />
        <FeaturedProject />
        <RecentWork />
        <Clients />
        <ForHire />
      </Layout>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query HomeQuery {
    landingCover: file(relativePath: { eq: "img/landing-cover.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
