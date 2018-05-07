import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Banner, { Type, Title, Subtitle } from '../components/Banner'
import Article from '../components/Article'
import ProjectDetails from '../components/Article/ProjectDetails'
import Wrapper from '../components/Wrapper'

class PostTemplate extends React.Component {
	render() {
		const post = this.props.data.markdownRemark
		const siteTitle = get(this.props, 'data.site.siteMetadata.title')
		const siteUrl = get(this.props, 'data.site.siteMetadata.siteUrl')
		const cover = get(post, 'frontmatter.cover.childImageSharp.sizes')
		const model = get(post, 'frontmatter.model')

		return (
			<Wrapper>
				<Helmet title={`${post.frontmatter.title} ∙ ${siteTitle}`}>
					<meta name="og:description" content={post.frontmatter.subtitle ? post.frontmatter.subtitle : post.excerpt} />
					<meta name="og:image" content={siteUrl + cover.src} />

					<meta name="description" content={post.frontmatter.subtitle ? post.frontmatter.subtitle : post.excerpt} />
				</Helmet>
				<Banner cover={cover}>
					<Type>{post.frontmatter.type}</Type>
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
				siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			excerpt
      frontmatter {
        title
        subtitle
        cover {
          childImageSharp {
						sizes(duotone: { highlight: "#f5f8fa", shadow: "#293742" }) {
							...GatsbyImageSharpSizes_withWebp
						}
          }
				}
        model
        category
        type
				date(formatString: "MMMM DD, YYYY")
				month: date(formatString: "MMMM YYYY")

				client
				description
				roles
				stack
      }
    }
  }
`
