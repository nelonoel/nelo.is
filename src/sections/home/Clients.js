import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-system'

import Subheading from '../../components/Subheading'
import Grid from '../../components/Grid'
import Wrapper from '../../components/Wrapper'

import svgBugwolf from '../../assets/img/clients/bugwolf.svg'
import svgMana from '../../assets/img/clients/mana.svg'
import svgPhaxio from '../../assets/img/clients/phaxio.svg'
import svgVyllage from '../../assets/img/clients/vyllage.svg'
import svgXTeam from '../../assets/img/clients/x-team.svg'

const Container = styled.div`
	background: ${props => props.theme.name === 'dark' ? props.theme.colors.light[2] : props.theme.colors.light[0]};
  border-bottom: ${theme('colors.dark.2')} solid 1px;
	padding: 2em 0;
	position: relative;
`

const Logo = styled.img.attrs({
	draggable: false,
	alt: props => props.company,
	title: props => props.company
}) `
	margin: 0 auto;
	max-height: 3em;
	width: 7em;
`

export default class Services extends PureComponent {
	render() {
		return (
			<Container>
				<Wrapper wide>
					<Subheading color="contrast.3" mt="0" mb={4} textAlign="center"> I had the opportunity to work with these companies:</Subheading>
					<Grid align="center" gap="2em 0.5em" width="8em">
						<Logo src={svgBugwolf} company="Bugwolf" />
						<Logo src={svgXTeam} company="X-Team" />
						<Logo src={svgPhaxio} company="Phaxio" />
						<Logo src={svgMana} company="MANA" />
						<Logo src={svgVyllage} company="Vyllage" />
					</Grid>
				</Wrapper>
			</Container>
		)
	}
}
