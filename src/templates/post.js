import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Banner, { Title, Subtitle } from '../components/Banner'
import Article from '../components/Article'
import Wrapper from '../components/Wrapper'

class PostTemplate extends React.Component {
	render() {
		const post = this.props.data.markdownRemark
		const siteTitle = get(this.props, 'data.site.siteMetadata.title')
		const cover = get(post, 'frontmatter.cover.childImageSharp.resize.src')

		return (
			<Wrapper>
				<Helmet title={`${post.frontmatter.title} ∙ ${siteTitle}`} />
				<Banner cover={cover}>
					<Title>{post.frontmatter.title}</Title>
					<Subtitle>{post.frontmatter.subtitle}</Subtitle>
				</Banner>
				<Article dangerouslySetInnerHTML={{ __html: post.html }} />
			</Wrapper>
		)
	}
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
`
