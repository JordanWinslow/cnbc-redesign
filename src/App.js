import React, { Fragment } from "react"

import TopNavHeader from "./components/header-component/TopNavHeader"
import StockBar from "./components/stock-bar-component/StockBar"

function App() {
  return (
    <Fragment>
      <TopNavHeader />
      <StockBar />
    </Fragment>
  )
}

export default App
