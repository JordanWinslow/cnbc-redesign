import React, { useState } from "react"
import styled from "styled-components"

import DropDownMenu from "./DropDownMenu"

const Container = styled.div`
  width: 53vw;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1340px) {
    width: 60vw;
  }
  @media (max-width: 920px) {
    width: 70vw;
  }
  @media (max-width: 750px) {
    display: none;
  }
`
const Link = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
  font-weight: bold;
  font-size: calc(1rem + 0.3vw);
  letter-spacing: 0.11em;
  color: var(--white);
  transition: 0.3s ease-in-out;
  cursor: pointer;
  box-sizing: content-box;
  :hover {
    color: var(--secondary);
    transform: translateY(8px);
    border-bottom: 7px solid var(--secondary);
  }
  @media (max-width: 1340px) {
    font-size: calc(0.8rem + 0.5vw);
  }
  @media (max-width: 1020px) {
    font-size: calc(0.6rem + 0.5vw);
  }
`
const NavLinks = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Container>
      <Link
        href="#"
        onMouseOver={() => setVisible({ markets: true })}
        onMouseLeave={() => setVisible({ markets: false })}
      >
        MARKETS
        {visible.markets && <DropDownMenu category="markets" />}
      </Link>
      <Link
        href="#"
        onMouseOver={() => setVisible({ business: true })}
        onMouseLeave={() => setVisible({ business: false })}
      >
        BUSINESS
        {visible.business && <DropDownMenu category="business" />}
      </Link>
      <Link
        href="#"
        onMouseOver={() => setVisible({ investing: true })}
        onMouseLeave={() => setVisible({ investing: false })}
      >
        INVESTING
        {visible.investing && <DropDownMenu category="investing" />}
      </Link>
      <Link
        href="#"
        onMouseOver={() => setVisible({ tech: true })}
        onMouseLeave={() => setVisible({ tech: false })}
      >
        TECH
        {visible.tech && <DropDownMenu category="tech" />}
      </Link>
      <Link
        href="#"
        onMouseOver={() => setVisible({ politics: true })}
        onMouseLeave={() => setVisible({ politics: false })}
      >
        POLITICS
        {visible.politics && <DropDownMenu category="politics" />}
      </Link>
      <Link
        href="#"
        onMouseOver={() => setVisible({ cnbcTV: true })}
        onMouseLeave={() => setVisible({ cnbcTV: false })}
      >
        CNBC TV
        {visible.cnbcTV && <DropDownMenu category="cnbcTV" />}
      </Link>
    </Container>
  )
}
export default NavLinks
