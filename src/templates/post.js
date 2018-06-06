import React, { PureComponent } from 'react'
import get from 'lodash/get'

import ForHire from '../sections/ForHire'
import SEO from '../components/SEO'
import Banner, { Type, Title, Subtitle } from '../components/Banner'
import Article from '../components/Article'
import ProjectDetails from '../components/Article/ProjectDetails'
import Wrapper from '../components/Wrapper'

class PostTemplate extends PureComponent {
	render() {
		const post = this.props.data.markdownRemark
		const cover = get(post, 'frontmatter.cover.childImageSharp.sizes')
		const siteUrl = get(this.props, 'data.site.siteMetadata.siteUrl')
		const siteTitle = get(this.props, 'data.site.siteMetadata.title')
		const forHire = get(this, 'props.data.site.siteMetadata.forHire')
		const image = siteUrl + cover.src
		const { model, title, subtitle, description, type, month, client, roles, stack } = post.frontmatter

		const meta = {
			image: image,
			title: title + (model === 'project' ? ` – ${subtitle}` : ''),
			description: model === 'project' ? description : subtitle,
			siteTitle: siteTitle
		}

		return (
			<div>
				<Wrapper>
					<SEO {...meta} />
					<Banner cover={cover}>
						<Type>{type}</Type>
						<Title>{title}</Title>
						<Subtitle>{subtitle}</Subtitle>
					</Banner>
					{model === 'project' &&
						<ProjectDetails
							month={month}
							client={client}
							description={description}
							roles={roles}
							stack={stack}
						/>
					}
					<Article wrapper={model === 'project' ? 'normal' : 'narrow'} dangerouslySetInnerHTML={{ __html: post.html }} />
				</Wrapper>
				{model === 'project' &&
					<ForHire forHire={forHire} />
				}
			</div>
		)
	}
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
				title
				forHire
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
