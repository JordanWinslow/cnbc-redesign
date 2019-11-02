/*THIS COMPONENT RENDERS THE ENTIRE FRONT PAGE NEWS SECTION*/
import React from "react"
import styled from "styled-components"

import TopNews from "./TopNews"

import TopNewsImage from "../../images/articles/hero-worker.png"

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const FullWidthHero = () => {
  return (
    <div>
      <TopNews
        image={TopNewsImage}
        title="The jobs numbers are out on Friday, but there’s another report that could be much more important"
        excerpt="A monthly manufacturing report Friday could be more impactful for markets than the jobs report, which was impacted by the GM strike."
      />
    </div>
  )
}

export default FullWidthHero
