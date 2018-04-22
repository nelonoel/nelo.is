import styled from 'styled-components'

const IconContainer = styled.div`
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.contrast[0]};
  color: ${props => props.theme.colors.contrast[3]};
	border-radius: 40%;
	display: inline-flex;
  height: 3.5em;
  width: 3.5em;

	& > svg {
		font-size: 2em;
	}

  & > img {
    height: 2em;
  }
`

export default IconContainer
