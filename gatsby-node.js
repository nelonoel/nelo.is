const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators

	return new Promise((resolve, reject) => {
		const post = path.resolve('./src/templates/post.js')
		resolve(
			graphql(
				`
          {
            allMarkdownRemark(
							limit: 1000
							filter: { frontmatter: { draft: { ne: true } } }
						) {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
			).then(result => {
				if (result.errors) {
					console.log(result.errors)
					reject(result.errors)
				}

				// Create pages
				_.each(result.data.allMarkdownRemark.edges, edge => {
					createPage({
						path: edge.node.fields.slug,
						component: post,
						context: {
							slug: edge.node.fields.slug,
						},
					})
				})
			})
		)
	})
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
	const { createNodeField } = boundActionCreators

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode })
		createNodeField({
			name: `slug`,
			node,
			value,
		})
	}
}
