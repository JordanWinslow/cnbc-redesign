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
      <p align="center" style={{ marginTop: "3rem" }}>
        CNBC Redesign Project by Jordan Winslow. CNBC Logo trademarked and owned
        by NBC Universal.
      </p>
      <p>Logo used for educational & demonstrational purposes only.</p>
      <p>
        Jordan Winslow is not affiliated or endorsed by CNBC or NBC Universal in
        any way.
      </p>
    </Fragment>
  )
}

export default App
