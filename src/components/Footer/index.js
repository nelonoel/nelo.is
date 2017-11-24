import React, { PureComponent } from 'react'
import styled from 'styled-components'
import * as Icon from 'react-feather'

import { ButtonLink } from '../Button'
import Wrapper from '../Wrapper'
import Logo from '../Logo'

const FooterContainer = Wrapper.withComponent('footer').extend`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: 2em 0.5em;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    opacity: 0.25;
  }

  & > h5 {
    letter-spacing: 0.125em;
    margin: 0 0 0.5em;
    opacity: 0.25;
    text-transform: uppercase;
  }
`

const FooterLink = ButtonLink.extend.attrs({
  transparent: true
})`
  color: ${props => props.theme.text};
  font-size: 0.9em;
  line-height: 1.25;
  margin-left: 0;
  opacity: 0.25;
  padding: 0.25em 0;
  transition: all .2s ease;

  &:hover {
    background: none;
    opacity: 0.3;
  }
`

const ExternalLink = FooterLink.withComponent('a')

class Footer extends PureComponent {
  render() {
    const posts = this.props.recent
    return (
      <FooterContainer>
        <Box>
          <Logo />
          <FooterLink to="/">www.nelo.ph</FooterLink>
        </Box>
        <Box>
          <h5>Latest</h5>
          {posts.map(({ node }) => (
            <FooterLink key={node.fields.slug} to={node.fields.slug}>{node.frontmatter.title}</FooterLink>
          ))}
        </Box>
        <Box>
          <h5>Connect</h5>
          <ExternalLink href="mailto:hello@nelo.ph"><Icon.Mail /> hello@nelo.ph</ExternalLink>
          <ExternalLink href="tel:+639168375550"><Icon.Phone /> +63 916 837 5550</ExternalLink>
          <FooterLink to="//github.com/nelonoel" target="_blank" rel="nofollow"><Icon.Github /> Github</FooterLink>
          <FooterLink to="//twitter.com/nelonoel" target="_blank" rel="nofollow"><Icon.Twitter /> Twitter</FooterLink>
          <FooterLink to="//instagram.com/nelonoel" target="_blank" rel="nofollow"><Icon.Instagram /> Instagram</FooterLink>
          <FooterLink to="/cv.pdf" target="_blank" rel="nofollow"><Icon.FileText /> Curriculum Vitae</FooterLink>
        </Box>
      </FooterContainer>
    )
  }
}

export default Footer
