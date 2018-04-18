import React, { PureComponent } from 'react'
import { ArrowRight } from 'react-feather'

import Article from '../../components/Article'
import Badge from '../../components/Badge'
import { ButtonLink } from '../../components/Button'
import { Flex, Box } from '../../components/Box'
import Wrapper from '../../components/Wrapper'

const Container = Article.extend`
  background: ${props => props.theme.light3};
	border-bottom: ${props => props.theme.dark1} solid 1px;
  margin: 0;

  ${Badge} {
    margin-right: 1.75em;
  }

  a {
    border: none;
  }

  h5, h6 {
    font-size: 0.7em;
    margin: 0;
  }

  h5 {
    color: ${props => props.theme.contrast5};
    font-size: 1em;
    font-weight: 400;
    line-height: 1.25;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 22em;
  }

  h6 {
    margin-top: 0.125em;
  }

  ${ButtonLink} {
    color:  ${props => props.theme.contrast4};
    font-size: 0.85em;
    padding: 0.6em 1.2em;

    &:hover {
    }
  }
`

const Content = Wrapper.extend`
  align-items: center;
  line-height: 1;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
`

export default class LatestPost extends PureComponent {
	render() {
		const { post } = this.props
		const slug = post.fields.slug
		const { title, category } = post.frontmatter

		return (
			<Container>
				<Content>
					<Box>
						<Badge>New!</Badge>
					</Box>
					<Box style={{ lineHeight: 1 }}>
						<h6>{category}</h6>
						<h5>{title}</h5>
					</Box>
					<ButtonLink to={slug} transparent sharp>
						<ArrowRight /> Read more
          </ButtonLink>
				</Content>
			</Container>
		)
	}
}
