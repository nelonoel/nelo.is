import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-system'
import { transparentize } from 'polished'
import { fullWidth } from '../../styles/mixins'

import List from '../List'
import Wrapper from '../Wrapper'
import Subheading from '../Subheading'

const Container = styled.section`
	${fullWidth}
	border-bottom: ${theme('colors.dark.1')} solid 1px;
	margin-bottom: 3em;
	position: relative;
`

const Content = styled.div`
	display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2em;
	padding-bottom: 1.5em;

  @media (max-width: 36em) {
		grid-template-columns: 1fr;
    grid-gap: 0.5em;
		padding: 0 0 1.5em;
  }
`

const Item = styled.div`
	color: ${theme('colors.contrast.4')};
	line-height: 1.4;
	margin: 1.5em auto;

	@media (max-width: 36em) {
		margin: 1.5em auto 0;
	}

	& > ${Subheading} {
		margin: 0;
	}

	& > ul {
		list-style-type: none;
		margin: 0 -0.125em;
		padding: 0;

		& > li {
			background: ${theme('colors.contrast.0')};
			border-radius: 3px;
			display: inline-block;
			font-size: 1rem;
			margin: 0.125em;
			padding: 0.25em 0.5em;
			white-space: nowrap;
		}
	}
`

const Description = styled.p`
	color: ${theme('colors.text')};
	font-size: 1.25em;
	margin: 0.125em 0;

	@media (max-width: 36em) {
		font-size: 1.15em;
	}
`

const Column = styled.div``

export class Detail extends PureComponent {
	render() {
		const { shouldRender, label, children } = this.props

		return shouldRender ? (
			<Item>
				<Subheading>{label}</Subheading>
				{children}
			</Item>
		) : null
	}
}

export default class ProjectDetails extends PureComponent {
	render() {
		const { client, month, description, roles, stack } = this.props

		return (
			<Container>
				<Wrapper>
					<Content>
						<Column>
							<Detail shouldRender={description} label="Description">
								<Description>{description}</Description>
							</Detail>
							<Detail shouldRender={stack instanceof Array} label="Stack">
								<List items={stack} />
							</Detail>
						</Column>
						<Column>
							<Detail shouldRender={client} label="Client">{client}</Detail>
							<Detail shouldRender={roles instanceof Array} label="Roles">
								<List items={roles} />
							</Detail>
							<Detail shouldRender={month} label="Month">{month}</Detail>
						</Column>
					</Content>
				</Wrapper>
			</Container>
		)
	}
}
