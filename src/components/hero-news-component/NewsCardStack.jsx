import React from "react"
import styled from "styled-components"

import NewsCard from "./NewsCard"

import NewsImage1 from "../../images/articles/square-trump.png"
import NewsImage2 from "../../images/articles/square-ceo.png"
import NewsImage3 from "../../images/articles/square-uaw.png"

const Container = styled.div`
  height: 33.375rem; /*MUST BE EQUAL TO HEIGHT OF TOP NEWS COMPONENT*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  @media (max-width: 1530px) {
    margin-right: 3rem;
  }
  @media (max-width: 1020px) {
    height: auto;
    margin: 3rem 0;
    gap: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
        "Wall Street strategists dispute Trump’s claim that impeachment is impacting the stock market",
      timePosted: "19 MIN AGO",
      link: "#"
    },
    {
      image: NewsImage2,
      title:
        "Ex-WeWork CEO accused of gender discrimination, smoking pot in front of pregnant staffer",
      timePosted: "44 MIN AGO",
      link: "#"
    },
    {
      image: NewsImage3,
      title:
        "US prosecutors say UAW leaders embezzled more than $1.5 million in union funds",
      timePosted: "AN HOUR AGO",
      link: "#"
    }
  ]
}

export default NewsCardStack
