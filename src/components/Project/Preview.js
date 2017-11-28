import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const card = {
  height: 16
}

const Container = styled(Link).attrs({
  key: props => props.slug,
  to: props => props.slug
})`
  background: ${props => props.theme.white};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  height: ${card.height}em;
  justify-content: center;
  margin: 0.5em 0;
  padding-top: 6em;
  position: relative;
  text-decoration: none;
  transition: all .2s ease;
  width: 48.5%;

  & > * {
    color: ${props => props.theme.text};
    pointer-events: none;
  }

  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transform: scale(1.01) translateY(-1%);
  }
`

const Cover = styled.div`
  background-color: rgba(0, 0, 0, 0.025);
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  border-top-right-radius: ${props => props.theme.borderRadius};
  border-top-left-radius: ${props => props.theme.borderRadius};
  height: 6em;
  position: absolute;
  top: 0;
  width: 100%;
`

const Content = styled.section`
  padding: 1em 1.5em;
`

const Title = styled.h1`
  font-size: 1.5em;
  line-height: 1;
  margin: 0;
  max-width: ${props => props.theme.containerWidth};

`

const Subtitle = styled.h2`
  color: #999;
  font-size: 1.15em;
  font-weight: 500;
  line-height: 1.2;
  margin: 0.15em 0;
`

const Date = styled.div`
  font-size: 0.85em;
  font-weight: 700;
  letter-spacing: 0.0612em;
  text-transform: uppercase;
  margin-top: 0.25em;
  opacity: 0.25;
`

const Type = styled.div`
  color: #394B59;
  align-items: center;
  display: flex;
  font-size: 0.75em;
  font-weight: 700;
  letter-spacing: 0.0612em;
  margin-bottom: 0.125em;
  text-transform: uppercase;

  & > svg {
    height: 1.15em;
    margin: -0.125em 0.35em 0 -0.25em;
    stroke-width: 3px;
  }
`

class ProjectPreview extends PureComponent {
  render() {
    const { slug, cover, title, subtitle, category, type, date } = this.props

    return (
      <Container slug={slug}>
        <Cover src={cover} />
        <Content>
          {type && <Type>{type}</Type>}
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Content>
      </Container>
    )
  }
}

export default ProjectPreview