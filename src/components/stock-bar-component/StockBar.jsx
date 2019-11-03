import React from "react"
import styled from "styled-components"

import StockNavigation from "./StockNavigation"
import Headline from "./StockHeadline"
import Stock from "./Stock"

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 11.4375rem; /*EQ 183px*/
  margin-top: 4rem; /*TO COMPENSATE FOR NAVBAR*/
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 750px) {
    margin-top: 3rem; /*TO COMPOENSATE FOR MOBILE NAVBAR*/
  }
`
const LinkHeadlineSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Divider = styled.div`
  width: 2px;
  height: 25px;
  background-color: var(--white);
  @media (max-width: 1020px) {
    display: none;
  }
`
const StockContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0.7rem;
  @media (max-width: 1020px) {
    /*Switch to Drag and Drop Mode*/
    align-items: unset;
    justify-content: unset;
    bottom: 1.5rem;
    overflow-y: hidden;
    flex-wrap: nowrap;
    overflow-x: auto;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const StockBar = () => {
  return (
    <Container>
      <LinkHeadlineSection>
        <StockNavigation />
        <Divider />
        <Headline headline="Dow drops more than 100 points, S&P 600 falls from record to end October." />
      </LinkHeadlineSection>
      <StockContainer>
        {FETCHCNBCAPI.data.map(stock => {
          /*********SIMULATED API FETCH***********/
          return (
            <Stock
              name={stock.name}
              direction={stock.trend}
              currentValue={stock.currentValue}
              changeAmount={stock.changeAmount}
              percent={stock.percent}
              key={stock.name}
            />
          )
        })}
      </StockContainer>
    </Container>
  )
}

/*Since I don't have access to the actual stock API, I am simulating it here*/
const FETCHCNBCAPI = {
  data: [
    {
      name: "DJIA",
      trend: "DOWN",
      currentValue: 3037.56,
      changeAmount: "-9.21",
      percent: "-0.30%"
    },
    {
      name: "S&P 500",
      trend: "UP",
      currentValue: 3066.91,
      changeAmount: "+29.35",
      percent: "+0.97%"
    },
    {
      name: "NASDAQ",
      trend: "DOWN",
      currentValue: 8386.4,
      changeAmount: "-94.04",
      percent: "-1.13%"
    },
    {
      name: "RUSS 2K*",
      trend: "UP",
      currentValue: 1589.33,
      changeAmount: "+26.88",
      percent: "+1.72%"
    },
    {
      name: "VIX",
      trend: "DOWN",
      currentValue: 12.3,
      changeAmount: "-0.92",
      percent: "-6.96%"
    }
  ]
}
export default StockBar
