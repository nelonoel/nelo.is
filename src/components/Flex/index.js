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
	textAlign,
	width
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
	${width}
`

export default Flex
