const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const ChildProcess = require('child_process');
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

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

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode })
		createNodeField({
			name: `slug`,
			node,
			value,
		})
	}
}

exports.onPostBuild = () => {
  ChildProcess.execSync("ps aux | grep jest | grep -v grep | awk '{print $2}' | xargs kill");
}
