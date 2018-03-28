import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Banner, { Title, Subtitle } from '../components/Banner'
import Article from '../components/Article'
import Wrapper from '../components/Wrapper'
import ProjectDetails from '../components/Article/ProjectDetails'

class PostTemplate extends React.Component {
	render() {
		const post = this.props.data.markdownRemark
		const siteTitle = get(this.props, 'data.site.siteMetadata.title')
		const cover = get(post, 'frontmatter.cover.childImageSharp.sizes.src')
		const model = get(post, 'frontmatter.model')

		return (
			<Wrapper>
				<Helmet title={`${post.frontmatter.title} ∙ ${siteTitle}`} />
				<Banner cover={cover}>
					<Title>{post.frontmatter.title}</Title>
					<Subtitle>{post.frontmatter.subtitle}</Subtitle>
				</Banner>
				{model === 'project' &&
					<ProjectDetails
						month={post.frontmatter.month}
						client={post.frontmatter.client}
						description={post.frontmatter.description}
						roles={post.frontmatter.roles}
						stack={post.frontmatter.stack}
					/>
				}
				<Article dangerouslySetInnerHTML={{ __html: post.html }} />
			</Wrapper>
		)
	}
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        subtitle
        cover {
          childImageSharp {
						sizes(duotone: { highlight: "#f5f8fa", shadow: "#293742" }) {
							src
						}
          }
				}
        model
        category
        type
				date(formatString: "MMMM DD, YYYY")
				month: date(formatString: "MMM YYYY")

				client
				description
				roles
				stack
      }
    }
  }
`
