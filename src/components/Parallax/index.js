import React, { PureComponent } from 'react'
import Rellax from 'rellax'

export default class Parallax extends PureComponent {
	componentDidMount() {
		if (this.el) {
			this.rellax = new Rellax(this.el)
		}
	}

	componentWillUnmount() {
		if (this.rellax) {
			this.rellax.destroy()
		}
	}

	render() {
		const { children, className, speed } = this.props

		return (
			<div
				className={className}
				ref={el => { this.el = el }}
				data-rellax-percentage={0.0125}
				data-rellax-speed={speed}
			>
				{children}
			</div>
		)
	}
}

Parallax.defaultProps = {
	speed: 0,
	children: null
}
