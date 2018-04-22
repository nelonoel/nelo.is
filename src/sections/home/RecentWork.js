import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-system'
import get from 'lodash/get'

import Grid from '../../components/Grid'
import Card from '../../components/Card'
import Wrapper from '../../components/Wrapper'

const Container = styled.section`
  background: ${theme('colors.dark.2')};

  & > ${Wrapper} {
    padding-top: 1.5em;

    & > h2,
    & > p {
      line-height: 1.4;
      margin: 0;
    }
  }

  ${Grid} {
		grid-auto-flow: column;
    overflow-x: auto;
    padding-bottom: 3rem;
    padding-top: 1.5rem;

    &::-webkit-scrollbar {
      display: none;
    }

    &:after {
      content: '';
      width: 1.5rem;
    }

    & > a {
      min-width: 16.5em;
    }
  }
`

export default class RecentWork extends PureComponent {
	render() {
		const { posts } = this.props

		return (
			<Container>
				<Wrapper>
					<h2>Latest Work</h2>
					<p>Yess</p>
				</Wrapper>
				<Grid width="1fr" gap="0 1.5rem" px={['1.5rem', '1.5rem', '1.5rem', '1.5rem', '3rem']}>
					{posts.map(({ node }) => {
						return <Card
							key={node.id}
							half={true}
							slug={node.fields.slug}
							cover={get(node, 'frontmatter.cover.childImageSharp.sizes')}
							title={get(node, 'frontmatter.title') || node.fields.slug}
							subtitle={get(node, 'frontmatter.subtitle')}
							category={get(node, 'frontmatter.category')}
							type={get(node, 'frontmatter.type')}
							date={get(node, 'frontmatter.date')}
						/>
					})}
				</Grid>
			</Container>
		)
	}
}
