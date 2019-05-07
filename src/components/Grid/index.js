import Grid from 'react-css-grid'
import styled from 'styled-components'
import { maxWidth, space, themeGet } from 'styled-system'

export default styled(Grid)`
	${maxWidth}
	${space}

	@media (max-width: ${themeGet('breakpoints.1')}) {
		grid-template-columns: auto;
	}
`
