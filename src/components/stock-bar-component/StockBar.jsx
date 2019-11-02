import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 4rem; /*TO COMPENSATE FOR NAVBAR*/
  width: 100%;
  height: 183px;
  background-color: var(--black);
  @media (max-width: 750px) {
    margin-top: 3rem; /*TO COMPOENSATE FOR MOBILE NAVBAR*/
  }
`

const StockBar = () => {
  return <Container></Container>
}

export default StockBar
