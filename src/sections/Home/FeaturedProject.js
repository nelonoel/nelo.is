import React, { PureComponent } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ArrowRight, ExternalLink } from 'react-feather'
import get from 'lodash/get'

import { ButtonLink, ExternalButtonLink } from '../../components/Button'
import Box from '../../components/Box'
import Grid from '../../components/Grid'
import Screen from '../../components/Screen'
import Subheading from '../../components/Subheading'
import Text from '../../components/Text'
import Wrapper from '../../components/Wrapper'

class FeaturedProject extends PureComponent {
  render() {
    const screens = {
      desktop: get(
        this,
        'props.data.featuredDesktopScreen.childImageSharp.sizes'
      ),
      mobile: get(this, 'props.data.featuredMobileScreen.childImageSharp.sizes')
    }

    return (
      <section>
        <Box bg="dark.0">
          <Wrapper pt={5} textAlign="center">
            <Subheading mt={0} mb={2}>
              Featured Project
            </Subheading>
            <Text
              color="contrast.4"
              fontSize={4}
              fontWeight="bold"
              lineHeight={1}
            >
              Phaxio
            </Text>
            <Text
              color="contrast.3"
              fontSize={2}
              lineHeight={1}
              mt={1}
              mx="auto"
              maxWidth="20em"
            >
              A developer-friendly API that enables processing of faxes.
            </Text>
            <Box my={3} textAlign="center">
              <ExternalButtonLink
                m="0.25em"
                minWidth="10.25em"
                href="//www.phaxio.com"
                target="_blank"
                rel="nofollow"
                inverted
                secondary
              >
                <ExternalLink />
                Visit website
              </ExternalButtonLink>
              <ButtonLink
                m="0.25em"
                minWidth="10.25em"
                to="/making/phaxio"
                secondary
              >
                <ArrowRight />
                View project
              </ButtonLink>
            </Box>
            <Box mt={4}>
              <Screen screens={screens} />
            </Box>
          </Wrapper>
        </Box>
        <Box
          boxShadow="0 -1px 3px rgba(0, 0, 0, 0.025)"
          bg="base"
          position="relative"
        >
          <Wrapper>
            <Grid py={[4, 4, 5]} gap="1em 2em" width={320}>
              <Text color="contrast.4" maxWidth="20em" mx="auto">
                Designed and developed Phaxio's brand identity, website, and
                app. Crafted a responsive UI from the ground up while preserving
                established user flows.
              </Text>
              <Text color="contrast.4" maxWidth="20em" mx="auto">
                Optimized search engine rankings by keeping the same URL routes
                to match previous search engine indices and making the content
                accessible across all devices.
              </Text>
            </Grid>
          </Wrapper>
        </Box>
      </section>
    )
  }
}

export default () => (
	<StaticQuery query={graphql`
		query FeaturedProjectQuery {
			featuredDesktopScreen: file(
				relativePath: { eq: "img/featured/desktop.png" }
			) {
				childImageSharp {
					sizes {
						...GatsbyImageSharpSizes_withWebp
					}
				}
			}
			featuredMobileScreen: file(
				relativePath: { eq: "img/featured/mobile.png" }
			) {
				childImageSharp {
					sizes {
						...GatsbyImageSharpSizes_withWebp
					}
				}
			}
		}
	`} render={data => <FeaturedProject data={data} />} />
)
