import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  margin: 3rem;
  @media (max-width: 750px) {
    width: 100%;
    margin: 1.8rem 0;
    padding: 0 0.5rem;
    box-sizing: border-box;
  }
`
const BlueBox = styled.div`
  width: 13.4375rem;
  height: 0.4375rem;
  background-color: var(--primaryLight);
`
const Header = styled.h2`
  color: var(--primaryDark);
`
const LiveTVButton = styled.div`
  position: absolute;
  top: -1.4rem;
  right: 0;
  padding: 1rem 0;
  width: 17rem;
  background-color: var(--white);
  color: var(--black);
  border: 1.4px solid var(--black);
  cursor: pointer;
  transition: 0.3s ease-in-out;
  text-align: center;
  :hover {
    background-color: var(--black);
    color: var(--white);
  }
  @media (max-width: 1340px) {
    top: 2rem;
    width: 15rem;
  }
  @media (max-width: 750px) {
    right: 0.5rem;
    font-size: 0.8rem;
    width: calc(4rem + 10vw);
  }
  @media (max-width: 500px) {
    top: 0.45rem;
    padding: 0.5rem;
    width: auto;
  }
`

const NewsDivider = () => {
  return (
    <Container>
      <BlueBox />
      <hr style={{ margin: 0 }} />
      <Header>TOP NEWS</Header>
      <LiveTVButton>LIVE TV</LiveTVButton>
    </Container>
  )
}

export default NewsDivider
