import React, { PureComponent } from 'react'
import Banner, { Emoji, Title, Description } from '../components/Banner'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import Flex from '../components/Flex'
import { Link } from 'gatsby'

class NotFoundPage extends PureComponent {
  render() {
		const { history, location } = this.props
    return (
			<Layout {...{ history, location }}>
				<Wrapper>
					<Flex alignItems="center" flex="1 1 auto" justifyContent="center">
						<Banner>
							<Emoji>4<span role="img" aria-label="shocked">😱</span>4</Emoji>
							<Title>Page not found</Title>
							<Description>
								You seem lost. Go back <Link to="/">home</Link>, maybe?
							</Description>
						</Banner>
					</Flex>
				</Wrapper>
			</Layout>
    )
  }
}

export default NotFoundPage
