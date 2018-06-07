import React, { PureComponent } from 'react'
import Banner, { Emoji, Title, Description } from '../../components/Banner'
import Flex from '../../components/Flex'
import Link from 'gatsby-link'

class ThanksPage extends PureComponent {
  render() {
    return (
      <Flex alignItems="center" flex="1 1 auto" justifyContent="center">
        <Banner>
          <Emoji>🎉</Emoji>
          <Title>Welcome to the party!</Title>
          <Description>
            Thank you for subscribing.{' '}
            <Link to="/writing">Continue reading</Link>?
          </Description>
        </Banner>
      </Flex>
    )
  }
}

export default ThanksPage
