import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Monitor, Mail } from 'react-feather'
import get from 'lodash/get'

import { ButtonLink } from '../../components/Button'
import { LogoIcon } from '../../components/Logo'
import { Flex, Box } from '../../components/Box'
import Wrapper from '../../components/Wrapper'

const Container = styled.div`
  border-bottom: ${props => props.theme.colors.dark[2]} solid 1px;
	padding: 2em 0;
	position: relative;
`

const Logo = LogoIcon.extend`
	margin-right: 1.5rem;
`

const Copy = Box.extend`
	& > h3,
	& > p {
		margin: 0;
	}
`

export default class ForHire extends PureComponent {
	render() {
		const forHire = get(this, 'props.data.site.siteMetadata.forHire')

		return (
			<Container>
				<Wrapper wide>
					<Flex alignItems="center" justifyContent="space-between">
						<Box>
							<Flex alignItems="center">
								<Box>
									<Logo forHire={forHire} />
								</Box>
								<Copy>
									<h3>I am currently available for hire.</h3>
									<p>Feel free to reach out!</p>
								</Copy>
							</Flex>
						</Box>
						<Box>
							<ButtonLink to="/making" inverted>
								<Monitor />
								View works
							</ButtonLink>
							<ButtonLink to="/at">
								<Mail />
								Get in touch
							</ButtonLink>
						</Box>
					</Flex>
				</Wrapper>
			</Container>
		)
	}
}
