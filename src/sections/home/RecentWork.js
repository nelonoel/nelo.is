import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import get from 'lodash/get'
import { ArrowRight } from 'react-feather'

import Box from '../../components/Box'
import { ButtonLink } from '../../components/Button'
import Card from '../../components/Card'
import Flex from '../../components/Flex'
import Grid from '../../components/Grid'
import Text from '../../components/Text'
import Wrapper from '../../components/Wrapper'

const Container = styled.section`
  background: ${themeGet('colors.dark.2')};

  & > ${Wrapper} {
    padding-top: 3rem;
  }

  ${Grid} {
    grid-auto-flow: column;
    overflow-x: auto;
    padding-bottom: 3rem;
    padding-top: 1.5rem;

    &::-webkit-scrollbar {
      display: none;
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
          <Flex
            alignItems={['start', 'start', 'center']}
            flexDirection={['column', 'column', 'row']}
            justifyContent="space-between"
          >
            <Box>
              <Text
                fontSize={3}
                fontWeight="bold"
                color="contrast.4"
                lineHeight={0}
              >
                Recent Work
              </Text>
              <Text
                color="contrast.3"
                fontSize={2}
                lineHeight={1}
                my={[2, 2, 1]}
              >
                Design & engineering, mixed.
              </Text>
            </Box>
            <Box pt={[2, 2, 0]}>
              <ButtonLink to="/making" mr={0} inverted>
                <ArrowRight />
                See all
              </ButtonLink>
            </Box>
          </Flex>
        </Wrapper>
        <Grid
          width="1fr"
          gap="0 1.5rem"
          px={['1.5rem', '1.5rem', '1.5rem', '1.5rem', '3rem']}
        >
          {posts.map(({ node }) => {
            return (
              <Card
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
            )
          })}
          <Box
            w={['1px', '1px', '1px', '1px', '1.5rem']}
            mr={['-1px', '-1px', '-1px', '-1px', '0']}
          />
        </Grid>
      </Container>
    )
  }
}
