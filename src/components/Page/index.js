import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'
import { link } from '../../styles/typography'

const Page = styled.div`
	background: ${themeGet('colors.base')};
	color: ${themeGet('colors.text')};
  display: flex;
  flex-direction: column;
	min-height: 100vh;

  p > a {
		${link}
  }
`

export const Content = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Page
