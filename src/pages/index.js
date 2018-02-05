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
  background: ${props => props.theme.contrast1};
  margin-top: -8em;
`

const Hero = styled.section`
  display: flex;
`

const Avatar = styled.div`
  align-self: flex-end;
  flex: 1;

  & > img {
    display: flex;
    width: 15em;
    margin-right: 3em;
  }
`

const Copy = styled.div`
	align-self: center;
  padding: 2em 0;
  text-align: left;

  & > h1 {
    font-size: 1.85em;
    font-weight: 600;
    margin: 0;
  }

  & > p {
    font-size: 1em;
    font-weight: 500;
    line-height: 1.5;
    margin: 0 0 0.6em;
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
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		return (
			<HomeBanner>
				<Helmet title={`${siteTitle} ∙ Web Developer & UI Designer`} />
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
                make delightful digital products.
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
