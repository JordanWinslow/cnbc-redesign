import React from "react"
import styled from "styled-components"
import MenuIcon from "../../images/icons/icon-menu.svg"

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: ${props =>
      props.location === "top"
        ? "width: 33px; height: 28px;"
        : "width: 24px; height: 20px;"};

    @media (max-width: 1340px) {
      ${props => (props.location === "top" ? "width: 24px;" : "")};
    }
  }
  @media (max-width: 750px) {
    display: none;
  }
`

const MenuButton = ({ location }) => {
  /*If Menu Button is in the top navigation bar it should be bigger since that is for large screens*/
  return (
    <Container location={location}>
      <img src={MenuIcon} alt="Menu Icon - Tap to Open Menu" />
    </Container>
  )
}

export default MenuButton
