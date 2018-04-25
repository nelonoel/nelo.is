import styled from 'styled-components'
import { selection } from 'polished'
import globalStyles from '../../styles/global'
import { theme } from 'styled-system'

const Page = styled.div`
	${props => selection({ 'backgroundColor': props.theme.colors.selection }, '*')}

	background: ${theme('colors.base')};
	color: ${theme('colors.text')};
  display: flex;
  flex-direction: column;
	min-height: 100vh;

  p > a {
    border-bottom: ${theme('colors.contrast.0')} solid 2px;
    color: ${theme('colors.text')};
		text-decoration: none;

    &:hover, &:focus {
			border-bottom-color: ${theme('colors.primary')};
			transition: border-color .1s ease;
    }
  }
`

export const Content = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Page

