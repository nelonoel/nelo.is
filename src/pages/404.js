import React, { PureComponent } from 'react'
import Banner, { Title, Description } from '../components/Banner'
import Link from 'gatsby-link'

class NotFoundPage extends PureComponent {
	render() {
		return (
			<Banner>
				<Title>Page not found</Title>
				<Description>
					You seem lost. Go back <Link href="/">home</Link>, maybe?
				</Description>
			</Banner>
		)
	}
}

export default NotFoundPage
