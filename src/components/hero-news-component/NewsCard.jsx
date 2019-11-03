import React from "react"
import styled from "styled-components"

const Container = styled.div`
  cursor: pointer;
  width: 100%;
  height: 9.8125rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s ease-in-out;
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 1340px) {
    width: calc(15rem + 16vw);
  }
  @media (max-width: 900px) {
    width: 90%;
    margin: auto;
  }
  @media (max-width: 500px) {
    width: 95%;
    height: 12rem;
  }
`
const ArticleImage = styled.img`
  width: 9.8125rem;
  height: 9.8125rem;
  @media (max-width: 500px) {
    width: 30vw;
    height: 30vw;
    align-self: flex-start;
    padding-top: 1rem;
  }
`
const ArticleContent = styled.div`
  height: 85%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Title = styled.p`
  font-family: "ProximaNova-Bold";
  font-size: 1.0625rem;
  line-height: 1.3125rem;
  letter-spacing: 0.015em;
  color: var(--black);
  :hover {
    text-decoration: underline;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const TimePosted = styled.p`
  font-family: "ProximaNova-Bold";
  font-size: 0.9rem;
  line-height: 0.9375rem;
  letter-spacing: 0.1em;
  color: var(--gray);
  @media (max-width: 500px) {
    font-size: 0.7rem;
    letter-spacing: 0.2em;
  }
`
const Link = styled.a`
  text-decoration: none;
  @media (max-width: 1020px) {
    /* THIS WRAPS THE ENTIRE CARD SO IT DETERMINES ALIGNMENT */
    justify-self: center; /*to align vertical grid*/
  }
  @media (max-width: 900px) {
    width: 100%;
    margin: auto;
  }
`

const NewsCard = ({ image, title, timePosted, link }) => {
  return (
    <Link href={link}>
      <Container>
        <ArticleImage src={image} alt={title} />
        <ArticleContent>
          <Title>{title}</Title>
          <TimePosted>{timePosted}</TimePosted>
        </ArticleContent>
      </Container>
    </Link>
  )
}

export default NewsCard
