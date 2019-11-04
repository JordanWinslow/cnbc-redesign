/*THIS COMPONENT RENDERS THE ENTIRE FRONT PAGE NEWS SECTION*/
import React from "react"
import styled from "styled-components"

import TopNews from "./TopNews"
import NewsCardStack from "./NewsCardStack"
import DesktopSideBar from "./DesktopSideBar"

import TopNewsImage from "../../images/articles/hero-worker.jpg"

const Container = styled.div`
  width: 100%;
  display: flex;

  justify-content: flex-start;
  @media (max-width: 1020px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`

const FullWidthHero = () => {
  return (
    <Container>
      <TopNews
        image={TopNewsImage}
        title="There are numbers about jobs, doing job related things which could have a big impact on jobs. "
        excerpt="A job report is out this Tuesday which has serious implications about job related job things for people with jobs. Read more immediately."
      />
      <NewsCardStack />
      <DesktopSideBar />
    </Container>
  )
}

export default FullWidthHero
