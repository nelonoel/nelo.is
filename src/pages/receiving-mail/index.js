import React, { PureComponent } from 'react'
import Banner, { Emoji, Title, Description } from '../../components/Banner'
import Layout from '../../components/Layout'
import Wrapper from '../../components/Wrapper'
import Flex from '../../components/Flex'

class ReceivingMail extends PureComponent {
  render() {
		const { history, location } = this.props
    return (
			<Layout {...{ history, location }}>
				<Wrapper>
					<Flex alignItems="center" flex="1 1 auto" justifyContent="center">
						<Banner>
							<Emoji><span role="img" aria-label="mail">✉️</span></Emoji>
							<Title>Message sent</Title>
							<Description>
								Thank you for reaching out. I'll get back to you, soon!
							</Description>
						</Banner>
					</Flex>
				</Wrapper>
			</Layout>
    )
  }
}

export default ReceivingMail
