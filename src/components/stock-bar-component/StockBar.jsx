import React from "react"
import styled from "styled-components"

import StockNavigation from "./StockNavigation"

const Container = styled.div`
  margin-top: 4rem; /*TO COMPENSATE FOR NAVBAR*/
  width: 100%;
  height: 11.4375rem; /*EQ 183px*/
  background-color: var(--black);
  @media (max-width: 750px) {
    margin-top: 3rem; /*TO COMPOENSATE FOR MOBILE NAVBAR*/
  }
`

const StockBar = () => {
  return (
    <Container>
      <StockNavigation />
    </Container>
  )
}

export default StockBar
