import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'

export default class SEO extends PureComponent {
  render() {
    const { title, siteTitle, image, description } = this.props

    return (
      <Helmet title={`${title} • ${siteTitle}`}>
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {image && <meta property="og:image" content={image} />}
        {title && <meta property="og:title" content={title} />}
      </Helmet>
    )
  }
}

SEO.defaultProps = {
  title: 'Digital Craftsman',
  siteTitle: 'Nelo',
}
