import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.div`
  position: relative;
  margin-left: 3rem;
  width: 65.1875rem;
  height: 33.375rem;
  border: 2px solid black;
`
const GradientOverlay = styled.div`
  position: absolute;
  z-index: 1; /*appear above the gradient*/
  background: linear-gradient(90deg, #091d38 61.46%, rgba(9, 29, 56, 0) 100%);
  width: 66%;
  height: 100%;
`
const NewsImage = styled.img`
  position: absolute;
  right: 0;
  height: 100%;
`
const Article = styled.div`
  z-index: 2; /*appear above the gradient*/
  position: absolute;
  left: 3rem;
  height: 100%;
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  font-family: "ProximaNova-Xbold";
  font-size: 2.8125rem;
  letter-spacing: 0.015em;
  color: var(--white);
`
const Excerpt = styled.p`
  font-family: "ProximaNova-Bold";
  font-size: 1.25rem;
  line-height: 151.8%;
  /* or 30px */
  letter-spacing: 0.015em;
  color: var(--white);
`

const TopNews = ({ image, title, excerpt }) => {
  return (
    <Container>
      <GradientOverlay />
      <NewsImage src={image} alt={title} />
      <Article>
        <Title>{title}</Title>
        <Excerpt>{excerpt}</Excerpt>
      </Article>
    </Container>
  )
}

TopNews.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired
}

export default TopNews
