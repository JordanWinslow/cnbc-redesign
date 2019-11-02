import React from "react"
import styled from "styled-components"

const Headline = styled.div`
  font-family: "ProximaNova-Bold";
  font-size: 1.0625rem; /*17px*/
  letter-spacing: 0.1em;
  color: var(--white);
  @media (max-width: 1340px) {
    font-size: 0.9rem;
  }
  @media (max-width: 1020px) {
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
  }
  @media (max-width: 750px) {
    display: flex;
    font-size: 0.8rem;
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
const Text = styled.p`
  flex: 0 0 auto; /*ALLOWS ITEMS TO GO OFF SCREEN*/
`

const StockHeadline = ({ headline }) => {
  return (
    <Headline>
      <Text>{headline}</Text>
    </Headline>
  )
}

export default StockHeadline
