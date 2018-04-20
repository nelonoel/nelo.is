import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Subheading from '../../components/Subheading'
import { Flex, Box } from '../../components/Box'
import Wrapper from '../../components/Wrapper'

import svgBugwolf from '../../assets/img/clients/bugwolf.svg'
import svgMana from '../../assets/img/clients/mana.svg'
import svgPhaxio from '../../assets/img/clients/phaxio.svg'
import svgVyllage from '../../assets/img/clients/vyllage.svg'
import svgXTeam from '../../assets/img/clients/x-team.svg'

const Container = styled.div`
	background: ${props => props.theme.name === 'dark' ? props.theme.light3 : props.theme.light1};
  border-bottom: ${props => props.theme.dark1} solid 1px;
	padding: 2em 0;
	position: relative;
`

const Logos = Flex.extend`
	overflow: hidden;
`

const Logo = styled.img.attrs({
	draggable: false,
	alt: props => props.company,
	title: props => props.company
}) `
	margin: 0 1em;
	max-height: 3em;
	width: 7em;
`

const Copy = Subheading.extend`
	margin: 0 auto 1.25em;
`

export default class Services extends PureComponent {
	render() {
		return (
			<Container>
				<Wrapper wide>
					<Copy textAlign="center"> I had the opportunity to work with these companies:</Copy>
					<Logos justifyContent="space-between">
						<Logo src={svgBugwolf} company="Bugwolf" />
						<Logo src={svgXTeam} company="X-Team" />
						<Logo src={svgPhaxio} company="Phaxio" />
						<Logo src={svgMana} company="MANA" />
						<Logo src={svgVyllage} company="Vyllage" />
					</Logos>
				</Wrapper>
			</Container >
		)
	}
}
