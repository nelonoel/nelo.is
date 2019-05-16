import React, { PureComponent } from 'react'
import Banner, { Emoji, Title, Description } from '../../components/Banner'
import Layout from '../../components/Layout'
import Wrapper from '../../components/Wrapper'
import Flex from '../../components/Flex'
import { Link } from 'gatsby'

class SendingMail extends PureComponent {
  render() {
		const { history, location } = this.props
    return (
			<Layout {...{ history, location }}>
				<Wrapper>
					<Flex alignItems="center" flex="1 1 auto" justifyContent="center">
						<Banner>
							<Emoji><span role="img" aria-label="party popper">🎉</span></Emoji>
							<Title>Welcome to the party!</Title>
							<Description>
								Thank you for subscribing.{' '}
								<Link to="/writing">Continue reading</Link>?
							</Description>
						</Banner>
					</Flex>
				</Wrapper>
			</Layout>
    )
  }
}

export default SendingMail
