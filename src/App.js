import React, { Fragment } from "react"

import TopNavHeader from "./components/header-component/TopNavHeader"
import StockBar from "./components/stock-bar-component/StockBar"
import NewsDivider from "./components/NewsDivider"

function App() {
  return (
    <Fragment>
      <TopNavHeader />
      <StockBar />
      <NewsDivider />
      <h1 align="center" style={{ marginTop: "100px" }}>
        WORK IN PROGRESS!
      </h1>
      <h2 align="center">EXPECT BUGS!</h2>
    </Fragment>
  )
}

export default App
