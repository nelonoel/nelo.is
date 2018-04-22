import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { Check } from 'react-feather'
import styled from 'styled-components'

import Wrapper from '../../components/Wrapper'
import Button from '../../components/Button'
import Banner, { Title, Description } from '../../components/Banner'
import Subheading from '../../components/Subheading'
import TextField, { TextArea } from '../../components/TextField'

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

const Label = Subheading.extend`
	color: ${props => props.theme.colors.contrast[4]};
	display: flex;
	margin-bottom: 0.25em;
`.withComponent('label')

class ContactPage extends PureComponent {
	componentDidMount() {
		this.firstField.focus()
	}

	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		return (
			<div>
				<Helmet title={`${siteTitle} ∙ Contact`} />
				<Banner>
					<Title>Contact</Title>
					<Description>
						Feel free to reach out. Talk to you soon!
					</Description>
				</Banner>
				<Wrapper>
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
			</div>
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
