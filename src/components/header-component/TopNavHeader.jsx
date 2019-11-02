import React from "react"
import styled from "styled-components"
import CNBCLogo from "../CNBCLogo"
import MenuButton from "./MenuButton"
import NavLinks from "./NavLinks"
import AreaLogin from "./AreaLogin"
import Search from "./Search"

const NavContainer = styled.div`
  box-sizing: border-box;
  background-color: var(--primaryLight);
  width: 100%;
  height: 4rem; /*Equivalent of 70px*/
  padding: 0.938rem 1.25rem;
  position: fixed;
  top: 0;
  z-index: 998; /*MODALS ARE 999*/
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 920px) {
    padding: 0.9rem 0.5rem 0.9rem 0.3rem;
  }
  @media (max-width: 750px) {
    height: 3rem;
  }
`

const TopNavHeader = () => {
  return (
    <NavContainer>
      <CNBCLogo type="wide" />
      <MenuButton location="top" />
      <NavLinks />
      <AreaLogin active="USA" />
      <Search />
    </NavContainer>
  )
}

export default TopNavHeader
