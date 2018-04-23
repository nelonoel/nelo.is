import styled from 'styled-components'
import {
	alignItems,
	display,
	flex,
	flexDirection,
	flexWrap,
	justifyContent,
	lineHeight,
	minWidth,
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
	${minWidth}
	${position}
	${space}
	${textAlign}
	${width}
`

export default Flex
