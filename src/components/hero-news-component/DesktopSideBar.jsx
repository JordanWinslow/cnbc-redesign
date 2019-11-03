import React from "react"
import styled from "styled-components"

import ArrowIcon from "../../images/icons/icon-leave-arrow.svg"

const Container = styled.div`
  width: 16.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    margin-left: 2rem;
    width: 80%;
    text-decoration: none;
    color: var(--black);
  }
  @media (max-width: 1530px) {
    display: none;
  }
`
const Button = styled.div`
  border: 1px solid var(--black);
  display: flex;
  justify-content: space-around;
  padding: 1.9375rem 0;
  margin: 2rem 0;
  transition: 0.3s ease-in-out;
  :hover {
    background-color: var(--black);
    color: var(--white);
  }
`
const Text = styled.p`
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.035em;
`

const DesktopSideBar = () => {
  return (
    <Container>
      {Links.data.map(button => {
        return (
          <a href={button.link} key={button.text}>
            <Button>
              <Text>{button.text}</Text>
              <img src={button.icon} alt={button.icon ? "Arrow Icon" : null} />
            </Button>
          </a>
        )
      })}
    </Container>
  )
}

const Links = {
  data: [
    {
      text: "PRO",
      link: "#"
    },
    {
      text: "WATCHLIST",
      link: "#"
    },
    {
      text: "MAKE IT",
      link: "#",
      icon: ArrowIcon
    },
    {
      text: "SELECT",
      link: "#",
      icon: ArrowIcon
    }
  ]
}

export default DesktopSideBar
