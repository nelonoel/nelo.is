import styled from 'styled-components'
import {
	alignItems,
	display,
	flex,
	flexDirection,
	flexWrap,
	justifyContent,
	lineHeight,
	position,
	space,
	textAlign
} from 'styled-system'

const Flex = styled.div`
	display: flex;

	${alignItems}
	${display}
	${flex}
	${flexDirection}
	${flexWrap}
	${justifyContent}
	${lineHeight}
	${position}
	${space}
	${textAlign}
`

export default Flex
