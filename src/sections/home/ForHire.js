import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-system'
import { Monitor, Mail } from 'react-feather'
import get from 'lodash/get'

import Text from '../../components/Text'
import { ButtonLink } from '../../components/Button'
import { LogoIcon } from '../../components/Logo'
import { Flex, Box } from '../../components/Box'
import Wrapper from '../../components/Wrapper'

const Container = styled.div`
  border-bottom: ${theme('colors.dark.2')} solid 1px;
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
									<Text fontWeight="bold" fontSize="2" color="contrast.4">I am currently available for hire.</Text>
									<Text color="contrast.3">Did you like my work? Feel free to reach out!</Text>
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
