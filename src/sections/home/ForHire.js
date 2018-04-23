import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { theme, boxShadow } from 'styled-system'
import { Monitor, Mail } from 'react-feather'
import get from 'lodash/get'

import Text from '../../components/Text'
import { ButtonLink } from '../../components/Button'
import { LogoIcon } from '../../components/Logo'
import Flex from '../../components/Flex'
import Box from '../../components/Box'
import Wrapper from '../../components/Wrapper'

const Container = styled.div`
  border-bottom: ${theme('colors.dark.2')} solid 1px;
	padding: 2em 0;
	position: relative;
`

export default class ForHire extends PureComponent {
	render() {
		const { forHire } = this.props

		return (
			<Container>
				<Wrapper wide>
					<Flex flexDirection={['column', 'column', 'column', 'column', 'row']} alignItems="center" justifyContent="space-between">
						<Box my={2}>
							<Flex flexDirection={['column', 'column', 'row']} alignItems="center">
								<Box>
									<LogoIcon forHire={forHire} />
								</Box>
								<Box textAlign={['center', 'center', 'left']} mt={[3, 3, 0]} pl="1.5rem" pr="0.5rem">
									<Text fontWeight="bold" fontSize="2" color="contrast.4" mb={-1}>I am {!forHire && 'un'}available for new work.</Text>
									<Text color="contrast.3">Interested? Feel free to reach out!</Text>
								</Box>
							</Flex>
						</Box>
						<Box my={2} textAlign="center">
							<ButtonLink m="0.25em 0.5em 0.25em 0" minWidth="10em" to="/making" inverted>
								<Monitor />
								View works
								</ButtonLink>
							<ButtonLink m="0.25em 0" minWidth="10em" to="/at">
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

ForHire.defaultProps = {
	forHire: false
}
