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
`
const ArticleImage = styled.img`
  width: 9.8125rem;
  height: 9.8125rem;
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
`
const TimePosted = styled.p`
  font-family: "ProximaNova-Bold";
  font-size: 0.9rem;
  line-height: 0.9375rem;
  letter-spacing: 0.1em;
  color: var(--gray);
`
const Link = styled.a`
  text-decoration: none;
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
