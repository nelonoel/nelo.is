import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { Check } from 'react-feather'

import Wrapper from '../../components/Wrapper'
import Button from '../../components/Button'
import Banner, { Title, Description } from '../../components/Banner'
import TextField, { TextArea } from '../../components/TextField'
import { subheading } from '../../styles/typography'

const Form = styled.form.attrs({
	name: 'contact',
	method: 'post',
	'data-netlify': true
}) `
	margin-top: -1em;
`

const Field = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1em auto;
	max-width: 25em;
`

const Label = styled.label`
	${subheading}
	color: ${props => props.theme.contrast5};
	display: flex;
	font-size: 0.85em;
	letter-spacing: 0.125em;
	margin-bottom: 0.25em;
	text-transform: uppercase;
`

class ContactPage extends PureComponent {
	componentDidMount() {
		this.firstField.focus()
	}

	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		return (
			<Wrapper>
				<Helmet title={`${siteTitle} ∙ Contact`} />
				<Banner>
					<Title>Contact</Title>
					<Description>
						I love receiving messages from real people. <br />
						Feel free to reach out. Talk to you soon!
					</Description>
				</Banner>
				<Form>
					<Field>
						<Label for="name">Name</Label>
						<TextField innerRef={nameInput => this.firstField = nameInput} type="text" name="name" />
					</Field>
					<Field>
						<Label for="email">E-mail</Label>
						<TextField type="text" name="email" />
					</Field>
					<Field>
						<Label for="message">Message</Label>
						<TextArea name="message" />
					</Field>
					<Field>
						<Button wide secondary><Check /> Send message</Button>
					</Field>
				</Form>
			</Wrapper>
		)
	}
}

export default ContactPage


export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
