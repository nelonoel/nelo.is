import React, { PureComponent } from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

import Card, { Grid } from '../../components/Card'
import Wrapper from '../../components/Wrapper'

const Container = styled.section`
  background: ${props => props.theme.dark1};

  & > ${Wrapper} {
    padding-top: 1.5em;

    & > h2,
    & > p {
      line-height: 1.4;
      margin: 0;
    }
  }

  ${Grid} {
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 0 2rem;
    overflow-x: auto;
    padding: 1.5rem 3rem 3rem;

    &::-webkit-scrollbar {
      display: none;
    }

    &:after {
      content: '';
      width: 1vw;
    }

    & > a {
      font-size: calc(0.1vw + ${props => props.theme.baseFontSize});
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
				<Grid itemMinWidth="16em">
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
