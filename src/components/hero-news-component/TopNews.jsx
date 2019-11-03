import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.div`
  position: relative;
  margin: 0 3rem;
  width: 65.1875rem;
  height: 33.375rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  will-change: transform;
  transition: 0.3s ease-in-out;
  overflow: hidden;
  :hover {
    transform: translateY(-3px);
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.6);
    img {
      transform: scale(1.1) rotate(3deg);
    }
  }
  @media (max-width: 1320px) {
    margin: 0 2rem 0 0;
  }
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
  transition: 5s ease-in-out;
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
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  @media (max-width: 1340px) {
  }
`
const Excerpt = styled.p`
  font-family: "ProximaNova-Bold";
  font-size: 1.25rem;
  line-height: 151.8%;
  /* or 30px */
  letter-spacing: 0.015em;
  color: var(--white);
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
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
