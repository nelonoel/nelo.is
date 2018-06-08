import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-system'

import Text from '../../components/Text'
import Flex from '../../components/Flex'
import Wrapper from '../../components/Wrapper'

import svgBugwolf from '../../assets/img/clients/bugwolf.svg'
import svgCarful from '../../assets/img/clients/carful.svg'
import svgMana from '../../assets/img/clients/mana.svg'
import svgPhaxio from '../../assets/img/clients/phaxio.svg'
import svgVyllage from '../../assets/img/clients/vyllage.svg'
import svgXTeam from '../../assets/img/clients/x-team.svg'
import { flex } from 'styled-system/dist/styles'

const Container = styled.div`
  background: ${props =>
    props.theme.name === 'dark'
      ? props.theme.colors.dark[0]
      : props.theme.colors.light[0]};
  padding: 2em 0;
  position: relative;
`

const Logo = styled.img.attrs({
  draggable: false,
  alt: props => props.company,
  title: props => props.company
})`
  max-height: 3em;
  max-width: 7em;
`

export default class Services extends PureComponent {
  render() {
    return (
      <Container>
        <Wrapper wide>
          <Text
            color="contrast.2"
            fontSize={2}
            lineHeight={2}
            mb={3}
            mt={2}
            textAlign="center"
          >
            Trusted by awesome companies, worldwide.
          </Text>
          <Flex flexWrap="wrap" justifyContent="center">
            <Flex
              alignItems="center"
              justifyContent="center"
              my={3}
              w={[1, 1 / 2, 1 / 3, 1 / 3, 1 / 6, 1 / 6]}
            >
              <Logo src={svgBugwolf} company="Bugwolf" />
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              ml={['auto', 3, 'auto']}
              mr={['auto', '10%', 'auto']}
              my={3}
              w={[1, 'auto', 1 / 3, 1 / 3, 1 / 6, 1 / 6]}
            >
              <Logo src={svgXTeam} company="X-Team" />
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              my={3}
              w={[1, 1 / 2, 1 / 3, 1 / 3, 1 / 6, 1 / 6]}
            >
              <Logo src={svgPhaxio} company="Phaxio" />
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              ml={['auto', 3, 'auto']}
              mr={['auto', '10%', 'auto']}
              my={3}
              w={[1, 'auto', 1 / 3, 1 / 3, 1 / 6, 1 / 6]}
            >
              <Logo src={svgMana} company="MANA" />
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              my={3}
              w={[1, 1 / 2, 1 / 3, 1 / 3, 1 / 6, 1 / 6]}
            >
              <Logo src={svgVyllage} company="Vyllage" />
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              ml={['auto', 3, 'auto']}
              mr={['auto', '10%', 'auto']}
              my={3}
              w={[1, 'auto', 1 / 3, 1 / 3, 1 / 6, 1 / 6]}
            >
              <Logo src={svgCarful} company="Carful" />
            </Flex>
          </Flex>
        </Wrapper>
      </Container>
    )
  }
}
