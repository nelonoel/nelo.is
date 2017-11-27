import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Wrapper from '../../components/Wrapper'

class ContactPage extends PureComponent {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <Wrapper>
        <Helmet title={`${siteTitle} ∙ Contact`} />
        Contact me
      </Wrapper>
    )
  }
}

export default ContactPage


export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
