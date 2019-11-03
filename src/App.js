import React, { Fragment } from "react"

import TopNavHeader from "./components/header-component/TopNavHeader"
import StockBar from "./components/stock-bar-component/StockBar"
import NewsDivider from "./components/NewsDivider"
import FullWidthHero from "./components/hero-news-component/FullWidthHero"

function App() {
  return (
    <Fragment>
      <TopNavHeader />
      <StockBar />
      <NewsDivider />
      <FullWidthHero />
      <h1 align="center" style={{ marginTop: "100px" }}>
        WORK IN PROGRESS!
      </h1>
      <h2 align="center">EXPECT BUGS!</h2>
      <p align="center">
        Currently the Hero Section has not been finished so it will be broken on
        smaller screens.
      </p>
    </Fragment>
  )
}

export default App
