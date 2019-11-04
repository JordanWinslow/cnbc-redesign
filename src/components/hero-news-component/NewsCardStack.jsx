import React from "react"
import styled from "styled-components"

import NewsCard from "./NewsCard"

import NewsImage1 from "../../images/articles/square-trump.jpg"
import NewsImage2 from "../../images/articles/square-ceo.jpg"
import NewsImage3 from "../../images/articles/square-uaw.jpg"

const Container = styled.div`
  height: 33.375rem; /*MUST BE EQUAL TO HEIGHT OF TOP NEWS COMPONENT*/
  width: 28.3125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  @media (max-width: 1530px) {
    margin-right: 3rem;
  }
  @media (max-width: 1020px) {
    box-sizing: border-box;
    margin: 0;
    justify-content: start;
    padding: 5vw 0;
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 4vw;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const NewsCardStack = () => {
  return (
    <Container>
      {FETCHCNBCNEWSAPI.data.map(article => {
        return (
          <NewsCard
            image={article.image}
            title={article.title}
            timePosted={article.timePosted}
            link={article.link}
            key={article.title}
          />
        )
      })}
    </Container>
  )
}

const FETCHCNBCNEWSAPI = {
  data: [
    {
      image: NewsImage1,
      title:
        "Wall Street once again does something related to money. Picture unrelated.",
      timePosted: "19 MIN AGO",
      link: "#"
    },
    {
      image: NewsImage2,
      title:
        "Ex-CEO of business incorporated did a thing, and we are going to talk about that thing in this article.",
      timePosted: "44 MIN AGO",
      link: "#"
    },
    {
      image: NewsImage3,
      title:
        "US Politicians sit on nice chairs in a dimly lit room and talk about politics. Find out more.",
      timePosted: "AN HOUR AGO",
      link: "#"
    }
  ]
}

export default NewsCardStack
