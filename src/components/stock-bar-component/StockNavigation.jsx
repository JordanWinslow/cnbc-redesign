import React from "react"
import styled from "styled-components"

const NavContainer = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Link = styled.a``

const StockNavigation = () => {
  return (
    <NavContainer>
      <Link href="#"></Link>
      <Link href="#"></Link>
      <Link href="#"></Link>
      <Link href="#"></Link>
      <Link href="#"></Link>
      <Link href="#"></Link>
      <Link href="#"></Link>
      <Link href="#"></Link>
    </NavContainer>
  )
}

export default StockNavigation
