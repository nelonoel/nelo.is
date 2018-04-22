import styled from 'styled-components'
import { selection } from 'polished'
import globalStyles from '../../styles/global'
import { theme } from 'styled-system'

const Page = styled.div`
	background: ${theme('colors.base')};
	color: ${theme('colors.text')};
  display: flex;
  flex-direction: column;
	min-height: 100vh;

	${props => selection({ 'backgroundColor': props.theme.colors.selection }, '*')}
`

export const Content = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Page

