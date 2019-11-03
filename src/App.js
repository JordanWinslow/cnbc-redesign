import React, { Fragment } from "react"

import TopNavHeader from "./components/header-component/TopNavHeader"
import StockBar from "./components/stock-bar-component/StockBar"
import NewsDivider from "./components/NewsDivider"
import FullWidthHero from "./components/hero-news-component/FullWidthHero"
import Footer from "./components/Footer"

function App() {
  return (
    <Fragment>
      <TopNavHeader />
      <StockBar />
      <NewsDivider />
      <FullWidthHero />
      <Footer />
    </Fragment>
  )
}

export default App
