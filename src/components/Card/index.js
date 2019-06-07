import React, { PureComponent } from 'react'
import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'
import { Link } from 'gatsby'
import { rgba } from 'polished'
import Img from 'gatsby-image'

import Subheading from '../Subheading'

const Cover = styled(Img)`
  height: 100%;
`

const Placeholder = styled.div`
  background: ${props =>
    props.theme.name === 'dark'
      ? props.theme.colors.light[1]
      : props.theme.colors.base};
  height: 100%;
  width: 100%;
`

const Content = styled.div`
  padding: 1.5em;
`

const Type = styled(Subheading)`
  align-items: center;
  color: ${themeGet('colors.contrast.4')};
  display: flex;
  font-size: 0.75em;
  line-height: 1;
  letter-spacing: 0.0612em;
  margin: 0;

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
  color: ${themeGet('colors.contrast.3')};
  font-size: 1em;
  font-weight: normal;
  line-height: 1.35;
  margin: 0.15em 0 0.3em;
`

const Date = styled.div`
  color: ${themeGet('colors.contrast.1')};
  font-size: 0.75em;
  font-weight: bold;
  letter-spacing: 0.0612em;
  text-transform: uppercase;
  margin: 0.45em 0 -0.45em;
`

const Category = styled(Subheading)`
  align-self: stretch;
  box-sizing: border-box;
  border: ${props =>
      props.theme.name === 'dark'
        ? props.theme.colors.light[0]
        : props.theme.colors.dark[0]}
    solid 0;
  color: ${props =>
    props.theme.name === 'dark'
      ? props.theme.colors.dark[1]
      : props.theme.colors.dark[4]};
  font-size: 0.75em;
  height: 100%;
  line-height: 1;
  margin: 0;
  padding: 0.7em;
  text-align: center;
  width: 100%;
  writing-mode: lr;

  @media (max-width: ${themeGet('breakpoints.1')}) {
    padding: 0.5em;
  }
`

const Item = styled(Link).attrs(({ slug }) => ({
  to: slug
}))`
  align-items: center;
  background: ${props =>
    props.theme.name === 'dark'
      ? props.theme.colors.contrast[0]
      : props.theme.colors.white};
  border-radius: ${themeGet('radii.2')};
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.01),
							0 1px 4px rgba(0, 0, 0, 0.09);
  box-sizing: border-box;
  color: ${themeGet('colors.text')};
  cursor: pointer;
  display: grid;
  grid-template-columns: ${props => (props.half ? '1fr' : '8.25em 1fr 1.5em')};
  grid-template-rows: ${props => (props.half ? '6em 1fr 1.5em;' : null)};
  justify-content: start;
  overflow: hidden;
	min-height: 8.5em;
  position: relative;
	text-decoration: none;
	transform: translate3d(0, 0, 0);
  transition: box-shadow 0.2s ease,
  						transform 0.2s ease;

	& > .cover {
		background-color: ${props =>
      props.theme.name === 'dark'
        ? props.theme.colors.light[1]
        : props.theme.colors.base};
		height: 100%;
	}

	& > ${Category} {
		${props => (props.half ? 'border-top-width: 1px;' : 'border-left-width: 1px;')}
		writing-mode: ${props => (props.half ? 'lr' : 'tb-rl')};
	}

	@media (min-width: ${themeGet('breakpoints.1')}) {
		&.focus-visible {
			box-shadow: 0 0 0 3px ${props => rgba(props.theme.colors.contrast[2], 0.6)};
		}

		&:hover {
			box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.02),
									0 3px 9px rgba(0, 0, 0, 0.045);
			transform: translate3d(0, -3px, 0);
		}

		&:active {
			box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03);
			transform: none;
		}
	}

	${props =>
    props.half
      ? `
		& > .cover {
			height: 100%;
			overflow: hidden;
		}
	`
      : null}

  @media (max-width: ${themeGet('breakpoints.1')}) {
    grid-template-columns: 1fr;
		grid-template-rows: 6em 1fr 1.5em;

		& > .cover {
			height: 6em;
			overflow: hidden;
		}

    & > ${Category} {
			border-left-width: 0;
			border-top-width: 1px;
      writing-mode: lr;
    }
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
      category
    } = this.props

    return (
      <Item slug={slug} half={half}>
        {cover ? (
          <Cover
            fluid={cover}
            alt={title}
            title={title}
          />
        ) : (
          <Placeholder />
        )}
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
