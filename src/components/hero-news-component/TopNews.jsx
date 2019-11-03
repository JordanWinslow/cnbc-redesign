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
  @media (max-width: 1340px) {
    margin: 0 2rem 0 0;
  }
  @media (max-width: 1020px) {
    margin: 0;
    width: 100%;
  }
  @media (max-width: 900px) {
    padding-bottom: 3rem;
    height: 35rem;
  }
`
const GradientOverlay = styled.div`
  position: absolute;
  z-index: 1; /*appear above the gradient*/
  background: linear-gradient(90deg, #091d38 61.46%, rgba(9, 29, 56, 0) 100%);
  width: 66%;
  height: 100%;
  @media (max-width: 1340px) {
    width: 75%;
  }
  @media (max-width: 900px) {
    bottom: 0;
    height: 65%;
    width: 100%;
    background: linear-gradient(0deg, #091d38 61.46%, rgba(9, 29, 56, 0) 100%);
  }
  @media (max-width: 750px) {
    height: 75%;
  }
  @media (max-width: 500px) {
    height: 80%;
  }
`
const NewsImage = styled.img`
  position: absolute;
  right: 0;
  height: 100%;
  transition: 5s ease-in-out;
  @media (max-width: 900px) {
    height: auto;
    left: 0;
    top: 0;
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 140%;
  }
`
const Article = styled.div`
  z-index: 2; /*appear above the gradient*/
  position: absolute;
  left: 3rem;
  height: 100%;
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1340px) {
    width: 65%;
  }
  @media (max-width: 900px) {
    position: relative;
    width: 90%;
    justify-content: flex-end;
  }
  @media (max-width: 750px) {
    position: relative;
    left: 0;
    margin: auto;
  }
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
  @media (max-width: 1350px) {
    font-size: calc(1rem + 2vw);
  }
  @media (max-width: 1020px) {
    font-size: 2.8rem;
  }
  @media (max-width: 750px) {
    font-size: calc(1.5rem + 3vw);
  }
  @media (max-width: 500px) {
    font-size: calc(1rem + 5vw);
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
  @media (max-width: 600px) {
    font-size: calc(0.7rem + 2vw);
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
