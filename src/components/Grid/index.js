import Grid from 'react-css-grid'
import styled from 'styled-components'
import { space, theme } from 'styled-system'

export default styled(Grid) `
	${space}

	@media (max-width: ${theme('breakpoints.1')}) {
		grid-template-columns: auto;
	}
`
