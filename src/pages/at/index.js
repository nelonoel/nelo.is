import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-system'
import { Check } from 'react-feather'

import SEO from '../../components/SEO'
import Wrapper from '../../components/Wrapper'
import Button from '../../components/Button'
import Banner, { Title, Description } from '../../components/Banner'
import Subheading from '../../components/Subheading'
import TextField, { TextArea } from '../../components/TextField'

const Form = styled.form.attrs({
	action: '/receiving-mail',
	name: 'contact',
	method: 'POST',
	'data-netlify': true,
	'data-netlify-honeypot': 'bot-field'
}) `
	margin-top: -1em;
`

const Field = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1em auto;
	max-width: 25em;
`

const Label = Subheading.extend`
	color: ${theme('colors.contrast.4')};
	display: flex;
	margin-bottom: 0.25em;
`.withComponent('label')

class ContactPage extends PureComponent {
	render() {
		return (
			<div>
				<SEO title="Contact" />
				<Banner>
					<Title>Contact</Title>
					<Description>
						Feel free to reach out!
					</Description>
				</Banner>
				<Wrapper>
					<Form>
						<Field>
							<Label htmlFor="name">Name</Label>
							<TextField type="text" name="name" required />
						</Field>
						<Field>
							<Label htmlFor="email">E-mail</Label>
							<TextField type="email" name="email" required />
						</Field>
						<Field>
							<Label htmlFor="message">Message</Label>
							<TextArea name="message" required />
						</Field>
						<Field>
							<Button wide secondary><Check /> Send message</Button>
						</Field>
						<input type="hidden" name="form-name" value="contact" />
					</Form>
				</Wrapper>
			</div>
		)
	}
}

export default ContactPage
