import React, { PureComponent } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { rgba } from 'polished'
import themeGet from '@styled-system/theme-get'
import get from 'lodash/get'
import { ArrowRight } from 'react-feather'

import Subheading from '../../components/Subheading'
import Badge from '../../components/Badge'
import Flex from '../../components/Flex'
import Box from '../../components/Box'
import Wrapper from '../../components/Wrapper'

const ReadMore = styled(Box).attrs({
  color: 'contrast.2',
  display: 'flex',
  lineHeight: '1.4',
  p: '1rem 1.5rem',
  mr: ['-1.5rem', '-1.5rem', '-1.5rem', '-1.5rem', 0]
})`
  box-shadow: 0 0 0 1px ${props => rgba(props.theme.colors.dark[4], 0.1)};
  white-space: nowrap2;
  transition: background 0.2s ease;
`

const Container = styled(Link)`
  background: ${themeGet('colors.light.2')};
  border-bottom: ${themeGet('colors.dark.0')} solid 1px;
  display: flex;
  margin: 0;
  overflow: hidden;
  text-decoration: none;

  &:hover ${ReadMore}, &.focus-visible ${ReadMore} {
    background: ${props => rgba(props.theme.colors.dark[4], 0.1)};
  }

  ${Badge} {
    margin-right: 1.75em;
  }

  a {
    border: none;
  }

  h5,
  h6 {
    font-size: 0.7em;
    margin: 0;
  }

  h5 {
    left: 0;
    margin-right: 0;
    position: absolute;
    right: 0.75rem;
    color: ${themeGet('colors.contrast.4')};
    font-size: 1em;
    font-weight: 400;
    line-height: 1.25;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h6 {
    margin-top: 0.015rem;
  }
`

class LatestPost extends PureComponent {
  render() {
    const post = get(this, 'props.data.latestPost.edges[0].node')
    const slug = post.fields.slug
    const { title, category } = post.frontmatter

    return (
      <Container to={slug}>
        <Wrapper>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            maxWidth="100%"
          >
            <Flex flex="1 0 auto" alignItems="center">
              <Box lineHeight={0} display={['none', 'none', 'block']}>
                <Badge>New!</Badge>
              </Box>
              <Flex
                flex="1 0 auto"
                flexDirection="column"
                lineHeight={0}
                maxWidth="100%"
              >
                <Subheading display={['none', 'none', 'inline']}>
                  {category}
                </Subheading>
                <Subheading display={['inline', 'inline', 'none']}>
                  Latest Post
                </Subheading>
                <Flex flex="1 0 auto" position="relative" height="1.25rem">
                  <h5>{title}</h5>
                </Flex>
              </Flex>
            </Flex>
            <ReadMore>
              <ArrowRight />
              <Box display={['none', 'none', 'inline']} ml={3}>
                Read more
              </Box>
            </ReadMore>
          </Flex>
        </Wrapper>
      </Container>
    )
  }
}

export default () => (
	<StaticQuery query={graphql`
		query LatestPostQuery {
			latestPost: allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
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
	`} render={data => <LatestPost data={data} />} />
)
