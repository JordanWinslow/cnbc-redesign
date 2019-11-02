import React from "react"
import styled from "styled-components"

const NavContainer = styled.div`
  width: 40vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .active-stock-link {
    border-bottom: 3px solid var(--secondary);
  }
  @media (max-width: 1020px) {
    position: absolute;
    top: 0;
    width: 94%;
    padding: 1rem;
    justify-content: space-between;
    box-sizing: border-box;
  }
  @media (max-width: 750px) {
    width: 100%;
    overflow-y: hidden;
    flex-wrap: nowrap;
    overflow-x: auto;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    .active-stock-link {
      border-bottom: 0;
      color: var(--secondary);
    }
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
  @media (max-width: 750px) {
    width: 6rem;
    flex: 0 0 auto; /*ALLOWS ITEMS TO GO OFF SCREEN*/
  }
`

const StockNavigation = () => {
  return (
    <NavContainer>
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
    </NavContainer>
  )
}

export default StockNavigation
