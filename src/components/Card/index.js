import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { darken, rgba } from 'polished'
import Img from 'gatsby-image'

import { subheading } from '../../styles/typography'

const card = {
	height: 15,
}

const Cover = styled(Img) `
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
	color: ${props => props.theme.contrast2};
  font-size: 0.75em;
	font-weight: bold;
  letter-spacing: 0.0612em;
  text-transform: uppercase;
  margin-top: 0.45em;
`

const Category = styled.div`
	${subheading}
  align-self: stretch;
  box-sizing: border-box;
	border: ${props => darken(0.0306, props.theme.name === 'dark' ? props.theme.contrast1 : props.theme.white)} solid 0;
  color: ${props => darken(0.125, props.theme.name === 'dark' ? props.theme.contrast1 : props.theme.white)};
  font-size: 0.75em;
	line-height: 2;
  letter-spacing: 0.2em;
  padding: 0.25em;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
	writing-mode: lr;
`

const Item = styled(Link).attrs({
	key: props => props.slug,
	to: props => props.slug,
}) `
  align-items: center;
  background: ${props => props.theme.name === 'dark' ? props.theme.contrast1 : props.theme.white};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 1px 3px ${props => rgba(0, 0, 0, 0.125)};
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
		${props => props.half ? 'border-top-width: 1px;' : 'border-left-width: 1px;'}
		line-height: ${props => props.half ? 1.8 : 1.9};
		writing-mode: ${props => props.half ? 'lr' : 'tb-rl'};
	}

	@media (min-width: 30em) {
		&:hover, &:focus {
			box-shadow: 0 3px 9px ${props => rgba(0, 0, 0, 0.0625)};
			transform: translate3d(0, -3px, 0);
		}
	}

	${props => props.half ? `
		& > .cover {
			height: 6em;
			overflow: hidden;
		}
	` : null}

  @media (max-width: 30em) {
    grid-template-columns: 1fr;
		grid-template-rows: 6em 1fr 1.5em;

		& > .cover {
			height: 6em;
			overflow: hidden;
		}

    & > ${Category} {
			border-left-width: 0;
			border-top-width: 1px;
			line-height: 1.8;
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

	& ${Item} {
		min-height: ${props => props.itemMinHeight || null};
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
				<Cover sizes={cover} outerWrapperClassName="cover" />
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
