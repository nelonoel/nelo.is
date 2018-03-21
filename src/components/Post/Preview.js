import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const card = {
	height: 9.5
}

const Container = styled(Link).attrs({
	key: props => props.slug,
	to: props => props.slug
}) `
  background: ${props => props.theme.white};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: ${card.height}em;
  justify-content: center;
  margin: 0.75em auto;
  padding-left: ${card.height + 2}em;
  padding-right: 2.5em;
  position: relative;
  text-decoration: none;
  transition: all .2s ease;

  & > * {
    color: ${props => props.theme.text};
    pointer-events: none;
  }

  &:hover, &:focus {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.075);
    transform: translateY(-2px);
  }
`

const Cover = styled.div`
  background-color: rgba(0, 0, 0, 0.025);
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  height: ${card.height}em;
  left: 0;
  position: absolute;
  top: 0;
  width: ${card.height}em;
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
  font-weight: normal;
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

const Category = styled.div`
  background: rgba(0, 0, 0, 0.025);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.125);
  font-size: 0.75em;
  letter-spacing: 0.2em;
  padding: 0.25em;
  position: absolute;
  right: 2em;
  text-align: center;
  text-transform: uppercase;
  top: 0;
  transform-origin: top right;
  transform: rotate(-90deg);
  width: ${card.height + 3.15}em;
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

class PostPreview extends PureComponent {
	render() {
		const { slug, cover, title, subtitle, category, type, date } = this.props

		return (
			<Container slug={slug}>
				<Cover src={cover} />
				{type && <Type>{type}</Type>}
				<Title>{title}</Title>
				{subtitle && <Subtitle>{subtitle}</Subtitle>}
				<Date>{date}</Date>
				<Category>{category || 'Random'}</Category>
			</Container>
		)
	}
}

export default PostPreview
