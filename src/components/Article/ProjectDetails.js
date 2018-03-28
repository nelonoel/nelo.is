import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { subheading } from '../../styles/typography'
import { fullWidth } from '../../styles/mixins'

import List from '../List'
import Wrapper from '../Wrapper'

const Container = styled.section`
	${fullWidth}
	background: ${props => props.theme.name === 'dark' ? props.theme.dark1 : props.theme.light1};
	position: relative;
`

const Content = styled.div`
	display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2.5em;
	margin: 2.5em auto;
	padding: 1em 0;

  @media (max-width: 36em) {
		grid-template-columns: 1fr;
    grid-gap: 0.5em;
		padding: 0 0 1.5em;
  }
`

const Item = styled.div`
	color: ${props => props.theme.contrast5};
	line-height: 1.4;
	margin: 1.5em auto;

	@media (max-width: 36em) {
		margin: 1.5em auto 0;
	}

	& > h6 {
		${subheading}
		color: ${props => props.theme.contrast3};
		font-size: 0.85em;
		letter-spacing: 0.125em;
		margin: 0;
	}

	& > ul {
		list-style-type: none;
		margin: 0 -0.125em;
		padding: 0;

		& > li {
			background: ${props => props.theme.contrast1};
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
	color: ${props => props.theme.text};
	font-size: 1.25em;
	margin: 0.125em 0;

	@media (max-width: 36em) {
		font-size: 1.15em;
	}
`

const Column = styled.div`
	@media (max-width: 36em) {
		&:last-child {
			grid-row: 1;
		}
	}
`

export class Detail extends PureComponent {
	render() {
		const { shouldRender, label, children } = this.props

		return shouldRender ? (
			<Item>
				<h6>{label}</h6>
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
							<Detail shouldRender={client} label="Client">{client}</Detail>
							<Detail shouldRender={roles instanceof Array} label="Roles">
								<List items={roles} />
							</Detail>
							<Detail shouldRender={month} label="Month">{month}</Detail>
						</Column>
						<Column>
							<Detail shouldRender={description} label="Description">
								<Description>{description}</Description>
							</Detail>
							<Detail shouldRender={stack instanceof Array} label="Stack">
								<List items={stack} />
							</Detail>
						</Column>
					</Content>
				</Wrapper>
			</Container>
		)
	}
}
