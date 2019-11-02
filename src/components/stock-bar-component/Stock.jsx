import React from "react"
import styled from "styled-components"

import DownArrow from "../../images/icons/icon-down-trend.svg"
import UpArrow from "../../images/icons/icon-up-trend.svg"

const Container = styled.div`
  position: relative;
  width: 16.6875rem;
  height: 4.125rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  pointer-events: none;
  background-color: ${props =>
    props.direction === "UP" ? "var(--success);" : "var(--fail);"};
  @media (max-width: 1530px) {
    width: calc(6rem + 8vw);
  }
  @media (max-width: 1340px) {
    width: calc(6rem + 6vw);
  }
  @media (max-width: 1020px) {
    height: 3.9375rem;
    /*Switch to Drag and Drop Mode*/
    width: 13rem;
    margin: 0 2.5rem;
    flex: 0 0 auto;
  }
`
const CurrentStockValue = styled.p`
  align-self: flex-end;
  color: var(--white);
  font-family: "ProximaNova-Bold";
  font-size: 0.9375rem;
  letter-spacing: 0.06em;
`
const LeftAlignedBox = styled.div`
  display: flex;
  align-self: flex-start;
`
const StockName = styled.h3`
  margin: 5px;
  padding-left: 10px;
  color: var(--white);
  font-family: "ProximaNova-Bold";
  font-size: 1.5rem;
  letter-spacing: 0.015em;
  @media (max-width: 1020px) {
    font-size: 1.2rem;
  }
`
const ChangeAmountContainer = styled.div`
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: "ProximaNova-Regular";
  font-size: 0.8125rem;
  letter-spacing: 0.06em;
`
const ChangeAmount = styled.p`
  /**/
  padding-right: 10px;
`
const ChangePercent = styled.p`
  /**/
`

const Stock = ({ name, direction, currentValue, changeAmount, percent }) => {
  return (
    <Container direction={direction}>
      <CurrentStockValue>{currentValue}</CurrentStockValue>
      <LeftAlignedBox>
        <img
          src={direction === "UP" ? UpArrow : DownArrow}
          alt="Stock Trend Direction"
        />
        <StockName>{name}</StockName>
      </LeftAlignedBox>
      <ChangeAmountContainer>
        <ChangeAmount>{changeAmount}</ChangeAmount>
        <ChangePercent>{percent}</ChangePercent>
      </ChangeAmountContainer>
    </Container>
  )
}

export default Stock
