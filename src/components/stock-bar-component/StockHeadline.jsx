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
    font-size: calc(5px + 1vw);
  }
`

const StockHeadline = ({ headline }) => {
  return <Headline>{headline}</Headline>
}

export default StockHeadline
