import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const ContentBox = styled.div`
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1340px) {
    width: 7rem;
    a {
      font-size: 14px;
    }
    div {
      font-size: 14px;
    }
  }
  @media (max-width: 1020px) {
    width: 5rem;
    div {
      font-size: 12px;
    }
  }
  @media (max-width: 920px) {
    display: none;
  }
`
const AreaLinks = styled.div`
  display: flex;
  flex-direction: column;
  a {
    margin: 5px 0;
    color: var(--white);
    text-decoration: none;
    transition-duration: 0.3s;
    span {
      transition: opacity 0.3s ease-in;
      transition-delay: 1s;
    }
    :hover {
      color: #fcb813;
      span {
        /******TOOLTIP******/
        opacity: 1;
      }
    }
  }
  .area-link-active {
    border-bottom: 1px solid var(--white);
  }
  @media (max-width: 1020px) {
    display: none;
  }
`
const ToolTip = styled.span`
  position: absolute;
  pointer-events: none;
  opacity: 0;
  width: auto;
  background-color: var(--black);
  color: var(--white);
  text-align: center;
  border-radius: 6px;
  padding: 7px 20px;
`
const Divider = styled.div`
  width: 2px;
  height: 25px;
  background-color: var(--white);
`
const SignInLink = styled.div`
  color: var(--white);
  cursor: pointer;
  transition-duration: 0.3s;
  :hover {
    color: #fcb813;
  }
`

/*Receives a string letting us know which area link is active*/
const AreaLogin = ({ active }) => {
  return (
    <ContentBox>
      <AreaLinks>
        <a href="#" className={active === "USA" ? "area-link-active" : ""}>
          USA<ToolTip>View Only USA News</ToolTip>
        </a>
        <a href="#" className={active === "INTL" ? "area-link-active" : ""}>
          INTL<ToolTip>View International News</ToolTip>
        </a>
      </AreaLinks>
      <Divider />
      <SignInLink>SIGN IN</SignInLink>
    </ContentBox>
  )
}

AreaLogin.propTypes = {
  active: PropTypes.string.isRequired
}

export default AreaLogin
