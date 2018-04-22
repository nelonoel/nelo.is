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
				data-rellax-speed={speed}
				ref={el => { this.el = el }}
			>
				{children}
			</div>
		)
	}
}
