import React, { PureComponent } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'
import get from 'lodash/get'

import {
  Inbox,
  Smartphone,
  GitHub,
  Twitter,
  Instagram,
  FileText
} from 'react-feather'

import { subheading } from '../../styles/typography'
import { ButtonLink } from '../Button'
import Wrapper from '../Wrapper'
import Logo, { Dot } from '../Logo'

const FooterContainer = styled(Wrapper).attrs({ as: 'footer' })`
  align-items: flex-start;
  display: grid;
	grid-template-columns: repeat(12, 1fr);
	margin: 0.5em auto 0;
	position: relative;
`

const Box = styled.div`
  & > h5 {
		${subheading}
		color: ${themeGet('colors.contrast.2')};
		letter-spacing: 0.125em;
    margin: 0 0 0.35em;
	}
`

const FooterLink = styled(ButtonLink).attrs({
  transparent: true,
  sharp: true
})`
	color: ${themeGet('colors.contrast.2')};
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

  &:hover, &.focus-visible {
		background: none;
		box-shadow: none;
		color: ${themeGet('colors.contrast.3')};
		transition: color .2s ease;
	}
`

const LogoBox = styled(Box)`
  display: flex;
  flex-direction: column;
  grid-column: span 3;

  & > h1 {
    margin-bottom: 0.125em;
    z-index: 0;

    & > a {
      color: ${themeGet('colors.contrast.2')};

      &.focus-visible {
        text-shadow: -2px 2px 0 ${themeGet('colors.contrast.0')};
      }
    }
  }

  ${FooterLink} {
    margin-top: -0.6em;
  }

  ${Dot} {
    &:before {
      color: ${themeGet('colors.contrast.2')};
    }
  }

  @media (max-width: ${themeGet('breakpoints.1')}) {
    grid-column: span 12;
    grid-row: 3;
    margin-top: 0.75em;
    padding-top: 0.75em;
  }
`

const LatestArticles = styled(Box)`
  grid-column: span 6;

  @media (max-width: ${themeGet('breakpoints.1')}) {
    grid-column: span 7;
  }

  @media (max-width: ${themeGet('breakpoints.0')}) {
    grid-column: span 12;
  }
`

const Links = styled(Box)`
  grid-column: span 3;

  @media (max-width: ${themeGet('breakpoints.1')}) {
    grid-column: span 5;
    margin-left: 0.75em;
  }

  @media (max-width: ${themeGet('breakpoints.0')}) {
    grid-column: span 12;
    margin-left: 0;
    margin-top: 1em;
  }
`

class Footer extends PureComponent {
  render() {
		const email = get(this, 'props.data.site.siteMetadata.email')
    const posts = get(this, 'props.data.latestPosts.edges')

    return (
      <FooterContainer px="1.5em" py={['2rem', '2rem', '3rem']}>
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
          <FooterLink as="a" href={`mailto:${email}`}>
						<Inbox /> E-mail
          </FooterLink>
          <FooterLink as="a" href="tel:+639168375550">
						<Smartphone /> Mobile
          </FooterLink>
					<FooterLink as="a" href="//github.com/nelonoel" target="_blank" rel="nofollow">
						<GitHub /> GitHub
          </FooterLink>
					<FooterLink as="a"
            href="//twitter.com/nelonoel"target="_blank" rel="nofollow"
          >
						<Twitter /> Twitter
          </FooterLink>
					<FooterLink as="a"
            href="//instagram.com/si.nelo" target="_blank" rel="nofollow"
          >
						<Instagram /> Instagram
          </FooterLink>
          <FooterLink as="a" href="/resume.pdf" target="_blank" rel="nofollow">
						<FileText /> Resumé
          </FooterLink>
        </Links>
      </FooterContainer>
    )
  }
}

export default () => (
	<StaticQuery
		query={graphql`
			query FooterQuery {
				site {
					siteMetadata {
						email
					}
				}
				latestPosts: allMarkdownRemark(
					sort: { fields: [frontmatter___date], order: DESC }
					limit: 5
					filter: { frontmatter: { model: { ne: "project" }, draft: { ne: true } } }
				) {
					edges {
						node {
							id
							fields {
								slug
							}
							frontmatter {
								title
							}
						}
					}
				}
			}
		`}

		render={data => <Footer data={data} />}
	/>)
