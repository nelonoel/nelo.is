import styled from 'styled-components'
import Button from '../Button'

const Badge = styled.span`
	border: ${props => props.theme.colors.secondary} solid 2px;
	border-radius: ${props => props.theme.radii[2]};
	color: ${props => props.theme.colors.secondary};
	display: inline-block;
	font-size: 0.5em;
	font-weight: bold;
	letter-spacing: 0.125em;
	line-height: 2;
	padding: 0.125em 0.625em 0 0.75em;
	text-transform: uppercase;
`

export default Badge
