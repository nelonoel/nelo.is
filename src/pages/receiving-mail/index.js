import React, { PureComponent } from 'react'
import Banner, { Emoji, Title, Description } from '../../components/Banner'
import Flex from '../../components/Flex'

class ThanksPage extends PureComponent {
  render() {
    return (
      <Flex alignItems="center" flex="1 1 auto" justifyContent="center">
        <Banner>
          <Emoji>✉️</Emoji>
          <Title>Message sent</Title>
          <Description>
            Thank you for reaching out. I'll get back to you, soon!
          </Description>
        </Banner>
      </Flex>
    )
  }
}

export default ThanksPage
