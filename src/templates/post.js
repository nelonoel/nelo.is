import React from 'react'
import get from 'lodash/get'

import Banner, { Type, Title, Subtitle } from '../components/Banner'
import Article from '../components/Article'
import ProjectDetails from '../components/Article/ProjectDetails'
import Wrapper from '../components/Wrapper'

class PostTemplate extends React.Component {
	componentWillMount() {
		const siteUrl = get(this.props, 'data.site.siteMetadata.siteUrl')
		const post = this.props.data.markdownRemark
		const cover = siteUrl + get(post, 'frontmatter.cover.childImageSharp.sizes.src')
		const { model, title, subtitle, description } = post.frontmatter

		this.props.setMeta({
			cover: cover,
			title: title + (model === 'project' ? ` – ${subtitle}` : ''),
			description: model === 'project' ? description : subtitle,
			type: 'post'
		})
	}

	render() {
		const post = this.props.data.markdownRemark
		const cover = get(post, 'frontmatter.cover.childImageSharp.sizes')
		const model = get(post, 'frontmatter.model')

		return (
			<Wrapper>
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
				<Article wrapper={model === 'project' ? 'normal' : 'narrow'} dangerouslySetInnerHTML={{ __html: post.html }} />
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
