import React, { PureComponent } from 'react'
import styled, { keyframes } from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Code } from 'react-feather'

import Banner from '../sections/home/Banner'
import LatestPost from '../sections/home/LatestPost'
import Services from '../sections/home/Services'
import RecentWork from '../sections/home/RecentWork'
import Clients from '../sections/home/Clients'
import ForHire from '../sections/home/ForHire'

import Article from '../components/Article'
import { Flex, Box } from '../components/Box'
import { ButtonLink } from '../components/Button'
import Card, { Grid } from '../components/Card'
import IconContainer from '../components/IconContainer'
import Subheading from '../components/Subheading'
import Wrapper from '../components/Wrapper'

import svgGatsby from '../assets/img/stack/gatsby.svg'
import svgGraphQL from '../assets/img/stack/graphql.svg'
import svgReact from '../assets/img/stack/react.svg'
import svgJavascript from '../assets/img/stack/javascript.svg'
import svgSketch from '../assets/img/stack/sketch.svg'
import svgInvision from '../assets/img/stack/Invision.svg'

const Section = Article.extend`
	margin: 0;
`.withComponent('section')

class Home extends PureComponent {
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		const posts = get(this, 'props.data.recentWork.edges')
		const latestPost = get(this, 'props.data.latestPost.edges[0].node')

		return (
			<div>
				<Helmet title={`${siteTitle} ∙ Digital Craftsman`} />
				<Banner />
				<LatestPost post={latestPost} />
				<Services />
				<Section>
					<Wrapper>
						<p><strong>Constantly learning.</strong>I'm currently working on publishing my notes. For now, here are the tools I'm actively mastering at the moment.</p>
						<Flex justifyContent="space-between">
							<Box textAlign="center">
								<IconContainer>
									<img draggable="false" src={svgJavascript} alt="ES6" />
								</IconContainer>
								<h5>ES6+</h5>
							</Box>
							<Box textAlign="center">
								<IconContainer>
									<img draggable="false" src={svgReact} alt="ReactJS" />
								</IconContainer>
								<h5>ReactJS</h5>
							</Box>
							<Box textAlign="center">
								<IconContainer>
									<img draggable="false" src={svgGraphQL} alt="GraphQL" />
								</IconContainer>
								<h5>GraphQL</h5>
							</Box>
							<Box textAlign="center">
								<IconContainer>
									<img draggable="false" src={svgGatsby} alt="Gatsby" />
								</IconContainer>
								<h5>Gatsby</h5>
							</Box>
							<Box textAlign="center">
								<IconContainer>
									<img draggable="false" src={svgSketch} alt="Sketch" />
								</IconContainer>
								<h5>Sketch</h5>
							</Box>
							<Box textAlign="center">
								<IconContainer>
									<img draggable="false" src={svgInvision} alt="Invision" />
								</IconContainer>
								<h5>Invision</h5>
							</Box>
						</Flex>
					</Wrapper>
				</Section>
				<Section>
					<Wrapper>
						<div>
							Screenshot
					</div>
						<div>
							<h6>Featured Project</h6>
							<h2>Phaxio</h2>
							<h4>A developer-friendly API that enables sending and receiving of faxes.</h4>
							<p>Designed and developed Phaxio's brand identity, website, and app. Crafted a responsive UI from the ground up while preserving established user flows.</p>
							<p>Optimized search engine rankings by keeping the same URL routes to match previous search engine indices and making the content accessible across all devices.</p>
						</div>
					</Wrapper>
				</Section>
				<RecentWork posts={posts} />
				<Clients />
				<ForHire />
			</div>
		)
	}
}

export default Home

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
				title
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
  }
`
