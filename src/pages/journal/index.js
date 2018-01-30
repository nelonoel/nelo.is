import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Wrapper from '../../components/Wrapper'
import Banner, { Title, Description } from '../../components/Banner'
import Card, { Grid } from '../../components/Card'

class BlogIndex extends React.Component {
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		const posts = get(this, 'props.data.allMarkdownRemark.edges')

		return (
			<div>
				<Helmet title={`${siteTitle} ∙ Journal`} />
				<Banner>
					<Title>Journal</Title>
					<Description>
						Fleeting thoughts go to <a href="//twitter.com/nelonoel">Twitter</a>.
						Daily notes go to <a href="//github.com/nelonoel/open-notes">Github</a>.
						Worthy topics go here.
          </Description>
				</Banner>
				<Wrapper>
					<Grid itemHeight="9">
						{posts.map(({ node }) => {
							return (
								<Card
									slug={node.fields.slug}
									cover={get(
										node,
										'frontmatter.cover.childImageSharp.resize.src'
									)}
									title={get(node, 'frontmatter.title') || node.fields.slug}
									subtitle={get(node, 'frontmatter.subtitle')}
									category={get(node, 'frontmatter.category')}
									type={get(node, 'frontmatter.type')}
									date={get(node, 'frontmatter.date')}
								/>
							)
						})}
					</Grid>
				</Wrapper>
			</div>
		)
	}
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { model: { ne: "project" }, draft: { ne: true } } }
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
