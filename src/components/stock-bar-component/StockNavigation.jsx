import React from "react"
import styled from "styled-components"

const NavContainer = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1020px) {
    position: absolute;
    top: 0;
    width: 94%;
    padding: 1rem;
    justify-content: space-between;
  }
`
const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .active-stock-link {
    border-bottom: 3px solid var(--secondary);
  }
`
const Link = styled.a`
  font-family: "ProximaNova-Bold";
  font-size: 1.0625rem; /*17px*/
  letter-spacing: 0.1em;
  text-decoration: none;
  color: var(--white);
  transition: 0.3s ease-in-out;
  :hover {
    color: var(--secondary);
  }
  @media (max-width: 1340px) {
    font-size: 0.9rem;
  }
`

const StockNavigation = () => {
  return (
    <NavContainer>
      <LinkContainer>
        <Link href="#" className="active-stock-link">
          US
        </Link>
        <Link href="#">EU</Link>
        <Link href="#">ASIA</Link>
        <Link href="#">BONDS</Link>
        <Link href="#">OIL</Link>
        <Link href="#">GOLD</Link>
        <Link href="#">FX</Link>
        <Link href="#">PRE-MKT</Link>
      </LinkContainer>
    </NavContainer>
  )
}

export default StockNavigation
