import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { darken } from 'polished'
import { subheading } from '../../styles/typography'

const card = {
	height: 15,
}

const Cover = styled.div`
  background-color: ${props => darken(0.025, props.theme.name === 'dark' ? props.theme.contrast1 : props.theme.white)};
  ${props => props.src ? `background-image: url(${props.src});` : null}
  background-position: center;
  background-size: cover;
  height: 100%;
`

const Content = styled.div`
  padding: 1.5em;
`

const Type = styled.div`
	${subheading}
  align-items: center;
  color: ${props => props.theme.contrast5};
  display: flex;
  font-size: 0.75em;
  letter-spacing: 0.0612em;
  margin-bottom: -0.25em;
  text-transform: uppercase;

  & > svg {
    height: 1.15em;
    margin: -0.125em 0.35em 0 -0.25em;
    stroke-width: 3px;
  }
`

const Title = styled.h1`
  font-size: 1.5em;
  line-height: 1.25;
  margin: 0;
`

const Subtitle = styled.h2`
  color: ${props => props.theme.contrast4};
  font-size: 1em;
  font-weight: normal;
  line-height: 1.35;
  margin: 0.15em 0 0.3em;
`

const Date = styled.div`
	${subheading}
	color: ${props => props.theme.contrast2};
  font-size: 0.85em;
  letter-spacing: 0.0612em;
  text-transform: uppercase;
  margin-top: 0.4em;
`

const Category = styled.div`
	${subheading}
  align-self: stretch;
  background-color: ${props => darken(0.025, props.theme.name === 'dark' ? props.theme.contrast1 : props.theme.white)};
  box-sizing: border-box;
  color: ${props => darken(0.2, props.theme.name === 'dark' ? props.theme.contrast1 : props.theme.white)};
  font-size: 0.75em;
	line-height: 1.9;
  letter-spacing: 0.2em;
  padding: 0.25em;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  writing-mode: tb-rl;
`

const Item = styled(Link).attrs({
	key: props => props.slug,
	to: props => props.slug,
}) `
  align-items: center;
  background: ${props => props.theme.name === 'dark' ? props.theme.contrast1 : props.theme.white};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  color: ${props => props.theme.text};
  cursor: pointer;
  display: grid;
  grid-template-columns: ${props => (props.half ? '1fr' : '8.25em 1fr 1.5em')};
  grid-template-rows: ${props => (props.half ? '6em 1fr 1.5em;' : null)};
  justify-content: start;
  overflow: hidden;
  position: relative;
	text-decoration: none;
	transform: translate3d(0, 0, 0);
  transition: box-shadow 0.2s ease,
  						transform 0.2s ease;

  & > ${Category} {
    writing-mode: ${props => (props.half ? 'lr' : 'tb-rl')};
  }

	@media (min-width: 27em) {
		&:hover, &:focus {
			box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
			transform: translate3d(0, -2px, 0);
		}
	}

  @media (max-width: 27em) {
    grid-template-columns: 1fr;
		grid-template-rows: 6em 1fr 1.5em;

    & > ${Category} {
      writing-mode: lr;
    }
  }
`

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => props.itemMinWidth || '1fr'}, 1fr)
  );
  grid-gap: 0.85em;

  @media (max-width: 42em) {
    grid-gap: 0.5em;
  }
`

class Card extends PureComponent {
	render() {
		const {
			half,
			slug,
			cover,
			title,
			subtitle,
			type,
			date,
			category,
		} = this.props

		return (
			<Item slug={slug} half={half}>
				<Cover src={cover} />
				<Content>
					{type && <Type>{type}</Type>}
					<Title>{title}</Title>
					{subtitle && <Subtitle>{subtitle}</Subtitle>}
					{date && <Date>{date}</Date>}
				</Content>
				{category && <Category>{category}</Category>}
			</Item>
		)
	}
}

export default Card
