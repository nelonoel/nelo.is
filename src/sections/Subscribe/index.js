import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { theme, boxShadow } from 'styled-system'
import { Check } from 'react-feather'
import get from 'lodash/get'
import { darken } from 'polished'

import Text from '../../components/Text'
import Button from '../../components/Button'
import Flex from '../../components/Flex'
import Box from '../../components/Box'
import Wrapper from '../../components/Wrapper'
import Subheading from '../../components/Subheading'
import TextField from '../../components/TextField'

const Container = styled.div`
	background: ${theme('colors.light.1')};
  border-bottom: ${theme('colors.dark.0')} solid 1px;
	padding: 2em 0 2.25em;
	position: relative;
`

const Label = Subheading.extend`
	display: flex;
	margin: 0.125em 0;
`.withComponent('label')

const Input = TextField.extend`
	background: ${theme('colors.dark.0')};
	display: flex;
	font-size: ${theme('fontSizes.1')};
	padding: ${theme('space.3')}px;

	&:focus {
		box-shadow: inset 0 0 0 2px ${props => darken(0.05, props.theme.colors.dark[1])};
	}
`

const SubmitButton = Button.extend`
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
							<Text textAlign="center" fontWeight="bold" color="contrast.4" lineHeight="2" fontSize="2">Want more of this?</Text>
							<Text textAlign="center" color="contrast.3" lineHeight="1">Code, design, &amp; productivity – no 🐮💩 ever.</Text>
						</Box>
					</Flex>
					<Flex flexWrap="wrap" justifyContent="center" mt={4}>
						<Flex flexWrap="wrap" flex={['auto', 'auto', 'auto', 1]} width={['100%', '100%', 'auto']}>
							<Flex flexDirection="column" px={[0, 0, 2]} py={2} width={['100%', '100%', '35%']}>
								<Label>First Name</Label>
								<Input required />
							</Flex>
							<Flex flexDirection="column" flex="1" px={[0, 0, 2]} py={2} width={['100%', '100%', 'auto']}>
								<Label>E-mail</Label>
								<Input type="email" required />
							</Flex>
						</Flex>
						<Flex px={[0, 0, 2]} py={2} mt={['0.775em', '0.775em', '0.775em', '1.55em']} height={['2.9em', '2.9em', '2.9em', 'auto']} width={['100%', '100%', '100%', 'auto']}>
							<SubmitButton secondary>
								<Check />
								Subscribe
							</SubmitButton>
						</Flex>
					</Flex>
				</Wrapper>
			</Container>
		)
	}
}
