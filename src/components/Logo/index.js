import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Title = styled.h1`
  display: inline-block;
  line-height: 1;
  margin: 0;

  a {
    color: ${props => props.theme.text};
    font-size: 1em;
    font-weight: 700;
    letter-spacing: -0.0362em;
    opacity: 0.85;
    text-decoration: none;
    transition: all .2s ease;

    &:hover {
      opacity: 0.9;
    }
  }
`

class Logo extends PureComponent {
  render() {
    return (
      <Title>
        <Link to="/">Nelo.</Link>
      </Title>
    )
  }
}

export default Logo
