import React, { PureComponent } from 'react'
import styled, { keyframes } from 'styled-components'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import { BannerContainer } from '../components/Banner'
import Wrapper from '../components/Wrapper'
import { Monitor, Mail } from 'react-feather'
import { ButtonLink } from '../components/Button'

import svgFace from '../../static/img/avatar.svg'
import svgHand from '../../static/img/hand.svg'
import jpgCover from '../../static/img/landing-cover.jpg'
import webmCover from '../../static/vid/landing-cover.webm'
import mp4Cover from '../../static/vid/landing-cover.mp4'

const HomeBanner = BannerContainer.extend`
  background: ${props => props.theme.contrast1};
	margin-top: -8em;
	opacity: 1;
	overflow: hidden;
	position: relative;
`

const Video = styled.video`
	left: 50%;
	min-height: 100%;
	min-width: 100%;
	opacity: 0.075;
	pointer-events: none;
	position: absolute;
	top: 50%;
	transform: translateX(-50%) translateY(-50%);
	z-index: -1;
`

const Hero = styled.section`
	display: flex;

	@media (max-width: 42em) {
		flex-direction: column;
	}
`

const Avatar = styled.div`
  align-self: flex-end;
	flex: 1;
	position: relative;

	@media (max-width: 42em) {
		align-self: center;
		height: 20em;
	}
`

const Face = styled.img.attrs({
	draggable: false,
	src: svgFace
}) `
	display: flex;
	width: 15em;
	margin-right: 3em;

	@media (max-width: 42em) {
		margin: 0;
	}
`

const wave = keyframes`
	30%, 50% {
		transform: rotate(0);
	}

	40%, 60%, 80% {
		transform: rotate(-20deg);
	}

	70% {
		transform: rotate(-10deg);
	}

	from, to {
		transform: rotate(160deg);
	}
`

const Hand = styled.img.attrs({
	draggable: false,
	src: svgHand
}) `
	left: 14em;
	position: absolute;
	top: 11em;
	transform: rotate(160deg);
	transform-origin: 10% 100%;
	width: 5.5em;
	z-index: 2;

	&.waving {
		animation: ${wave} 1.6s ease-in;
	}

	@media (max-width: 42em) {
		z-index: 0;
	}
`

const Copy = styled.div`
	align-self: center;
	padding: 2em 0;
	position: relative;
  text-align: left;

  & > h1 {
    font-size: 1.85em;
		font-weight: 600;
		line-height: 1;
		margin: 0 auto 0.5em;
		opacity: 0.95;
  }

  & > p {
    font-size: 1em;
    font-weight: 500;
    line-height: 1.5;
		margin: 0 auto 0.6em;
		max-width: 20em;
		opacity: 0.95;
	}

	@media (max-width: 42em) {
		background: ${props => props.theme.dark1};
		box-sizing: border-box;
		padding: 2em 0.5em;
		text-align: center;
		width: 100vw;
	}
`

const Actions = styled.div`
  margin-top: 1.5em;

  & > ${ButtonLink} {
    margin: 0.25em 0.5em 0.25em 0;
    min-width: 6em;
  }
`

class Home extends PureComponent {
	constructor(props) {
		super(props)
		this.startAnimation = this.startAnimation.bind(this)
		this.endAnimation = this.endAnimation.bind(this)
		this.state = {
			waving: false
		}
	}

	startAnimation() {
		this.setState({ waving: true })
	}

	endAnimation() {
		this.setState({ waving: false })
	}

	componentDidMount() {
		if (this.video) {
			this.video.playbackRate = 0.75
			this.video.play()
		}
	}

	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		return (
			<HomeBanner>
				<Helmet title={`${siteTitle} ∙ Digital Craftsman`} />
				<Wrapper>
					<Hero>
						<Avatar onClick={this.startAnimation}>
							<Face />
							<Hand
								innerRef={hand => this.hand = hand}
								className={this.state.waving && 'waving'}
								onAnimationEnd={this.endAnimation}
							/>
						</Avatar>
						<Copy>
							<h1>Hello there!</h1>
							<p>
								I'm Nelo — a digital craftsman focusing on front-end development and UI design.
              </p>
							<p>
								I work with companies around the world to make delightful digital products.
              </p>
							<Actions>
								<ButtonLink to="/making">
									<Monitor />
									View works
                </ButtonLink>
								<ButtonLink to="/at" inverted>
									<Mail />
									Contact me
                </ButtonLink>
							</Actions>
						</Copy>
						<Video innerRef={video => { this.video = video }} poster={jpgCover} autoplay muted loop>
							<source src={webmCover} type="video/webm" />
							<source src={mp4Cover} type="video/mp4" />
						</Video>
					</Hero>
				</Wrapper>
			</HomeBanner >
		)
	}
}

export default Home

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
