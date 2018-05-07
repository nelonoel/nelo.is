import React, { PureComponent } from 'react'
import styled, { keyframes } from 'styled-components'
import get from 'lodash/get'

import Banner from '../sections/home/Banner'
import LatestPost from '../sections/home/LatestPost'
import Services from '../sections/home/Services'
import FeaturedProject from '../sections/home/FeaturedProject'
import RecentWork from '../sections/home/RecentWork'
import Clients from '../sections/home/Clients'
import ForHire from '../sections/home/ForHire'

class Home extends PureComponent {
	componentWillMount() {
		this.props.setMeta({
			title: 'Digital Craftsman'
		})
	}

	render() {
		const posts = get(this, 'props.data.recentWork.edges')
		const latestPost = get(this, 'props.data.latestPost.edges[0].node')
		const forHire = get(this, 'props.data.site.siteMetadata.forHire')
		const landingCover = get(this, 'props.data.landingCover.childImageSharp.resolutions.src')
		const screens = {
			desktop: get(this, 'props.data.featuredDesktopScreen.childImageSharp.sizes'),
			mobile: get(this, 'props.data.featuredMobileScreen.childImageSharp.sizes')
		}

		return (
			<div>
				<Banner cover={landingCover} />
				<LatestPost post={latestPost} />
				<Services />
				<FeaturedProject screens={screens} />
				<RecentWork posts={posts} />
				<Clients />
				<ForHire forHire={forHire} />
			</div>
		)
	}
}

export default Home

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
				forHire
      }
		}
		recentWork: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
			filter: { frontmatter: { title: { ne: "Phaxio" },  model: { eq: "project" }, draft: { ne: true } } }
			limit: 7
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            cover {
              childImageSharp {
								sizes (traceSVG: { background: "#ced9e0", color: "#738694" }) {
									...GatsbyImageSharpSizes_withWebp_tracedSVG
								}
              }
            }
            model
            category
            type
            date(formatString: "MMM YYYY")
          }
        }
      }
		}
    latestPost: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { model: { ne: "project" }, draft: { ne: true } } }
      limit: 1
    ) {
      edges {
        node {
					id
          fields {
            slug
          }
          frontmatter {
            title
            category
          }
        }
      }
		}
		landingCover: file(relativePath: { eq: "img/landing-cover.jpg" }) {
      childImageSharp {
        resolutions {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
		}
		featuredDesktopScreen: file(relativePath: { eq: "img/featured/desktop.png" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
		}
		featuredMobileScreen: file(relativePath: { eq: "img/featured/mobile.png" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`
