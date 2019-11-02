import React, { Fragment } from "react"
import styled from "styled-components"

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
  return (
    <Container>
      <Link href="#">MARKETS</Link>
      <Link href="#">BUSINESS</Link>
      <Link href="#">INVESTING</Link>
      <Link href="#">TECH</Link>
      <Link href="#">POLITICS</Link>
      <Link href="#">CNBC TV</Link>
    </Container>
  )
}

export default NavLinks
