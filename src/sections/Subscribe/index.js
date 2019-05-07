import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { themeGet, boxShadow } from 'styled-system'
import { Zap } from 'react-feather'
import { darken } from 'polished'

import Text from '../../components/Text'
import Button from '../../components/Button'
import Flex from '../../components/Flex'
import Box from '../../components/Box'
import Wrapper from '../../components/Wrapper'
import Subheading from '../../components/Subheading'
import TextField from '../../components/TextField'

const Container = styled.div`
  background: ${themeGet('colors.light.1')};
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.025' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  border-bottom: ${themeGet('colors.dark.0')} solid 1px;
  padding: 2em 0 2.25em;
  position: relative;
`

const Label = styled(Subheading)`
  display: flex;
  margin: 0.125em 0;
`.withComponent('label')

const Input = styled(TextField)`
  background: ${themeGet('colors.dark.0')};
  display: flex;
  font-size: ${themeGet('fontSizes.1')};
  padding: ${themeGet('space.3')}px;

  &:focus {
    box-shadow: inset 0 0 0 2px
      ${props => darken(0.05, props.theme.colors.dark[1])};
  }
`

const SubmitButton = styled(Button)`
  margin: 0;
  padding: 0.25em 1.5em;
  position: relative;
  top: -0.0612em;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: none;
  }
`

export default class ForHire extends PureComponent {
  render() {
    return (
      <Container>
        <Wrapper>
          <Flex alignItems="center" justifyContent="center">
            <Box>
              <Text
                textAlign="center"
                fontWeight="bold"
                color="contrast.4"
                lineHeight="2"
                fontSize="2"
              >
                Want more of this?
              </Text>
              <Text textAlign="center" color="contrast.3" lineHeight="1">
                Code, design, &amp; productivity – no 🐮💩
              </Text>
            </Box>
          </Flex>
          <form
            action="https://nelo.us7.list-manage.com/subscribe/post?u=5cb918082a39aef5a646dcf3a&amp;id=6ced124e32"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
          >
            <Flex flexWrap="wrap" justifyContent="center" mt={4}>
              <Flex
                flexWrap="wrap"
                flex={['auto', 'auto', 'auto', 1]}
                width={['100%', '100%', 'auto']}
              >
                <Flex
                  flexDirection="column"
                  py={2}
                  mr={[0, 0, 3]}
                  width={['100%', '100%', '35%']}
                >
                  <Label htmlFor="FNAME">First Name</Label>
                  <Input name="FNAME" id="FNAME" required />
                </Flex>
                <Flex
                  flexDirection="column"
                  flex="1"
                  py={2}
                  mr={[0, 0, 0, 3]}
                  width={['100%', '100%', 'auto']}
                >
                  <Label htmlFor="EMAIL">E-mail</Label>
                  <Input name="EMAIL" id="EMAIL" type="email" required />
                </Flex>
              </Flex>
              <Flex
                py={2}
                mt={['0.775em', '0.775em', '0.775em', '1.55em']}
                height={['2.9em', '2.9em', '2.9em', 'auto']}
                width={['100%', '100%', '100%', 'auto']}
              >
                <input
                  type="hidden"
                  name="b_5cb918082a39aef5a646dcf3a_6ced124e32"
                  tabindex="-1"
                  value=""
                />
                <SubmitButton
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  secondary
                >
                  <Zap />
                  Subscribe
                </SubmitButton>
              </Flex>
            </Flex>
          </form>
        </Wrapper>
      </Container>
    )
  }
}
