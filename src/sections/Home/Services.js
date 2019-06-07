import React, { PureComponent } from 'react'
import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'
import { Terminal, Feather } from 'react-feather'

import Box from '../../components/Box'
import Flex from '../../components/Flex'
import Grid from '../../components/Grid'
import IconContainer from '../../components/IconContainer'
import Wrapper from '../../components/Wrapper'

const Container = styled(Box)`
  border-bottom: ${themeGet('colors.dark.0')} solid 1px;
  font-size: ${themeGet('fontSizes.1')};
  position: relative;

  h4 {
    margin: 0;
    font-size: ${themeGet('fontSizes.2')};
  }

  p {
    color: ${themeGet('colors.contrast.4')};
    margin: 1em auto;
    max-width: 24rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export default class Services extends PureComponent {
  render() {
    return (
      <Container>
        <Wrapper>
          <Grid gap="2em" py={[4, 4, 5]} width={320}>
            <Box>
              <Flex
                alignItems="center"
                flexDirection={['row', 'row', 'row', 'column']}
                justifyContent={['start', 'start', 'start', 'center']}
                mb={[-2, -2, -2, 0]}
                mx="auto"
                lineHeight={0}
                maxWidth="24rem"
              >
                <IconContainer
                  mb={[0, 0, 0, 2]}
                  mr={[2, 2, 2, 0]}
                  height={['1.75em', '1.75em', '1.75em', '3.5em']}
                  width={['1.75em', '1.75em', '1.75em', '3.5em']}
                >
                  <Terminal />
                </IconContainer>
                <h4>Code</h4>
              </Flex>
              <p>
                I specialize in front-end development using{' '}
                <a href="//reactjs.org" target="blank" rel="nofollow">
                  ReactJS
                </a>{' '}
                to implement performant apps for web, desktop, and mobile.
              </p>
              <p>
                I have an extensive experience building apps from scratch up to
                deployment and maintenance.
              </p>
            </Box>
            <Box>
              <Flex
                alignItems="center"
                flexDirection={['row', 'row', 'row', 'column']}
                justifyContent={['start', 'start', 'start', 'center']}
                mb={[-2, -2, -2, 0]}
                mx="auto"
                lineHeight={0}
                maxWidth="24rem"
              >
                <IconContainer
                  mb={[0, 0, 0, 2]}
                  mr={[2, 2, 2, 0]}
                  height={['1.75em', '1.75em', '1.75em', '3.5em']}
                  width={['1.75em', '1.75em', '1.75em', '3.5em']}
                >
                  <Feather />
                </IconContainer>
                <h4>Design</h4>
              </Flex>
              <p>
                I create app and website prototypes using{' '}
                <a href="//sketchapp.com" target="blank" rel="nofollow">
                  Sketch
                </a>{' '}
                and{' '}
                <a href="//invisionapp.com" target="blank" rel="nofollow">
                  InVision
                </a>; crafting the tiniest details to provide a delightful user
                experience.
              </p>
              <p>
                We're a match if you love clean and minimal UI with subtle
                touches of creativity.
              </p>
            </Box>
          </Grid>
        </Wrapper>
      </Container>
    )
  }
}
