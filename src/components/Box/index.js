import styled from 'styled-components'
import {
  borders,
  borderColor,
  boxShadow,
  color,
  display,
  flexDirection,
  flexWrap,
  height,
  lineHeight,
  position,
  space,
  textAlign,
  width
} from 'styled-system'

const Box = styled.div`
	${borders}
	${borderColor}
	${boxShadow}
	${color}
	${display}
	${flexDirection}
	${flexWrap}
	${height}
	${lineHeight}
	${position}
	${space}
	${textAlign}
	${width}

	box-sizing: border-box;
`

export default Box
