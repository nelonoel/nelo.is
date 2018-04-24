import React, { PureComponent } from 'react'
import { theme } from 'styled-system'
import { ArrowRight } from 'react-feather'

import Article from '../../components/Article'
import Badge from '../../components/Badge'
import { ButtonLink } from '../../components/Button'
import Flex from '../../components/Flex'
import Box from '../../components/Box'
import Wrapper from '../../components/Wrapper'

const Container = Article.extend`
  background: ${theme('colors.light.2')};
	border-bottom: ${theme('colors.dark.0')} solid 1px;
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
    color: ${theme('colors.contrast.4')};
    font-size: 1em;
    font-weight: 400;
    line-height: 1.25;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
		margin-right: 0;
		max-width: 50vw;
  }

  h6 {
		display: inline-block;
    margin-top: 0.4em;
  }

  ${ButtonLink} {
    color:  ${theme('colors.contrast.3')};
    font-size: 0.85em;
		min-height: 3.6em;
    padding: 0.6em 1.2em;

    &:hover {
			color:  ${theme('colors.contrast.4')};
    }

		& > svg {
			margin-right: 0;
		}

		& > ${Box} {
			margin-left: 0.75em;
		}
  }
`

export default class LatestPost extends PureComponent {
	render() {
		const { post } = this.props
		const slug = post.fields.slug
		const { title, category } = post.frontmatter

		return (
			<Container>
				<Wrapper>
					<Flex alignItems="center" justifyContent="space-between">
						<Flex alignItems="center">
							<Box lineHeight={0} display={['none', 'block']}>
								<Badge>New!</Badge>
							</Box>
							<Box lineHeight={0}>
								<h6>{category}</h6>
								<h5>{title}</h5>
							</Box>
						</Flex>
						<ButtonLink to={slug} mr={['-1.5rem', '-1.5rem', '-1.5rem', '-1.5rem', 0]} transparent sharp>
							<ArrowRight />
							<Box display={['none', 'none', 'inline']}>Read more</Box>
						</ButtonLink>
					</Flex>
				</Wrapper>
			</Container>
		)
	}
}
