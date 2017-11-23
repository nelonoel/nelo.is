import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import avatar from '../../static/img/avatar.svg'

import { BannerContainer } from '../components/Banner'
import Wrapper from '../components/Wrapper'
import * as Icon from 'react-feather'
import { ButtonLink } from '../components/Button'

const HomeBanner = BannerContainer.extend`
  background: #e1e8ed;
`

const Hero = styled.section`
  display: flex;
`

const Avatar = styled.div`
  align-items: flex-end;
  flex: 1;

  & > img {
    display: flex;
    width: 15em;
    margin-right: 3em;
  }
`

const Copy = styled.div`
  align-self: flex-end;
  padding-bottom: 3.5em;
  text-align: left;

  & > h1 {
    font-size: 1.85em;
    font-weight: 600;
    margin: 0;
    opacity: 0.9;
  }

  & > p {
    font-size: 1.15em;
    opacity: 0.8;
    line-height: 1.5;
    margin: 0 0 0.6em;
  }
`

const Actions = styled.div`
  margin-top: 1.5em;

  & > ${ButtonLink} {
    margin: 0.25em 0.5em 0.25em 0;
    min-width: 7.15em;
  }
`

class Home extends PureComponent {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <HomeBanner>
        <Helmet title={`${siteTitle} ∙ Creative Developer`} />
        <Wrapper>
          <Hero>
            <Avatar>
              <img draggable="false" src={avatar} />
            </Avatar>
            <Copy>
              <h1>Hello there!</h1>
              <p>
                I'm Nelo — a software developer and UI designer currently
                based in the Philippines.
              </p>
              <p>
                I team up with startups and agencies around the world to
                turn ideas into delightful digital products.
              </p>
              <Actions>
                <ButtonLink to="/work">
                  <Icon.Monitor />
                  View works
                </ButtonLink>
                <ButtonLink to="/contact" inverted>
                  <Icon.Mail />
                  Contact me
                </ButtonLink>
              </Actions>
            </Copy>
          </Hero>
        </Wrapper>
      </HomeBanner>
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
