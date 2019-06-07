import Grid from 'react-css-grid'
import styled from 'styled-components'
import { maxWidth, space } from 'styled-system'
import themeGet from '@styled-system/theme-get'

export default styled(Grid)`
	${maxWidth}
	${space}
	width: auto;

	@media (max-width: ${themeGet('breakpoints.1')}) {
		grid-template-columns: auto;
	}
`
