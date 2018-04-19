import styled from 'styled-components'

export const Flex = styled.div`
	align-items: ${({ alignItems }) => alignItems};
	display: flex;
	flex-wrap: ${({ flexWrap }) => flexWrap};
	justify-content: ${({ justifyContent }) => justifyContent};
`

Flex.defaultProps = {
	alignItems: null,
	justifyContent: null
}

export const Box = styled.div`
	line-height: ${({ lineHeight }) => lineHeight};
	padding: ${({ padding }) => padding};
  text-align: ${({ textAlign }) => textAlign};
`

Box.defaultProps = {
	flexWrap: null,
	lineHeight: null,
	padding: null
}
