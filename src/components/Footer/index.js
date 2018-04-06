import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Mail, Phone, Github, Twitter, Instagram, FileText } from 'react-feather'
import { darken, transparentize } from 'polished'

import { subheading } from '../../styles/typography'
import { ButtonLink } from '../Button'
import Wrapper from '../Wrapper'
import Logo, { Dot } from '../Logo'

const breakpoint = '32em'

const FooterContainer = Wrapper.withComponent('footer').extend`
  align-items: flex-start;
  display: grid;
	grid-template-columns: repeat(12, 1fr);
	margin: 0.5em auto 0;
	padding: 1.5em 0.5em;
	position: relative;
`

const Box = styled.div`
  & > h5 {
		${subheading}
		color: ${props => props.theme.contrast3};
		letter-spacing: 0.125em;
    margin: 0 0 0.35em;
	}
`

const FooterLink = ButtonLink.extend.attrs({
	transparent: true,
}) `
	color: ${props => props.theme.contrast3};
	display: flex;
	font-size: 0.85em;
  line-height: 1.3;
	margin-left: 0;
	padding: 0.2em 0;
	transition: none;
	width: fit-content;

  & > svg {
    margin-right: ${props => (props.icon ? '0' : '0.5em')};
  }

  &:hover, &:focus {
		background: none;
		color: ${props => transparentize(0.1, props.theme.contrast4)};
		transition: color .2s ease;
  }
`

const LogoBox = Box.extend`
  display: flex;
  flex-direction: column;
  grid-column: span 3;

  & > h1 {
		margin-bottom: 0.125em;
		z-index: 0;

		& > a {
			color: ${props => props.theme.contrast3};
		}
	}

	${FooterLink} {
		margin-top: -0.6em;
	}

  ${Dot} {
		&:before {
			color: ${props => props.theme.contrast3};
		}
  }

  @media (max-width: ${breakpoint}) {
    grid-column: span 12;
		grid-row: 3;
    margin-top: 0.75em;
		padding-top: 0.75em;
  }
`

const LatestArticles = Box.extend`
  grid-column: span 6;

  @media (max-width: ${breakpoint}) {
		grid-column: span 7;
  }

  @media (max-width: 21.75em) {
		grid-column: span 12;
  }
`

const Links = Box.extend`
  grid-column: span 3;

  @media (max-width: ${breakpoint}) {
		grid-column: span 5;
		margin-left: 0.75em;
  }

  @media (max-width: 21.75em) {
		grid-column: span 12;
		margin-left: 0;
		margin-top: 1em;
  }
`

const ExternalLink = FooterLink.withComponent('a')

class Footer extends PureComponent {
	render() {
		const posts = this.props.recent

		return (
			<FooterContainer>
				<LogoBox>
					<Logo />
					<FooterLink to="/">www.nelo.is</FooterLink>
				</LogoBox>
				<LatestArticles>
					<h5>Latest</h5>
					{posts.map(({ node }) => (
						<FooterLink key={node.fields.slug} to={node.fields.slug}>
							{node.frontmatter.title}
						</FooterLink>
					))}
				</LatestArticles>
				<Links>
					<h5>Connect</h5>
					<ExternalLink href="mailto:hello@nelo.ph">
						<Mail />hello@nelo.ph
          </ExternalLink>
					<ExternalLink href="tel:+639168375550">
						<Phone />916 837 5550
          </ExternalLink>
					<FooterLink to="//github.com/nelonoel" target="_blank" rel="nofollow">
						<Github />Github
          </FooterLink>
					<FooterLink
						to="//twitter.com/nelonoel"
						target="_blank"
						rel="nofollow"
					>
						<Twitter />Twitter
          </FooterLink>
					<FooterLink
						to="//instagram.com/nelonoel"
						target="_blank"
						rel="nofollow"
					>
						<Instagram />Instagram
          </FooterLink>
					<FooterLink to="/cv.pdf" target="_blank" rel="nofollow">
						<FileText />Resumé
          </FooterLink>
				</Links>
			</FooterContainer>
		)
	}
}

export default Footer
