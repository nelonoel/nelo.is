import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Wrapper from '../../components/Wrapper'
import Banner, { Title, Description } from '../../components/Banner'
import Card, { Grid } from '../../components/Card'

class ProjectsIndex extends React.Component {
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		const posts = get(this, 'props.data.allMarkdownRemark.edges')

		return (
			<div>
				<Helmet title={`${siteTitle} ∙ Projects`} />
				<Banner>
					<Title>Projects</Title>
					<Description>
						Here are some of my finest work. <br />
						Tools used to build these are listed <a href="/using">here</a>.
					</Description>
				</Banner>
				<Wrapper>
					<Grid itemMinWidth={'13em'}>
						{posts.map(({ node }) => {
							return <Card
								half={true}
								slug={node.fields.slug}
								cover={get(node, 'frontmatter.cover.childImageSharp.resize.src')}
								title={get(node, 'frontmatter.title') || node.fields.slug}
								subtitle={get(node, 'frontmatter.subtitle')}
								category={get(node, 'frontmatter.category')}
								type={get(node, 'frontmatter.type')}
								date={get(node, 'frontmatter.date')}
							/>
						})}
					</Grid>
				</Wrapper>
			</div>
		)
	}
}

export default ProjectsIndex

export const pageQuery = graphql`
  query ProjectsIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { model: { eq: "project" }, draft: { ne: true } } }
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
                resize {
                  src
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
  }
`
