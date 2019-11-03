import React from "react"
import styled from "styled-components"
import icon from "../../images/icons/icon-search.svg"

const SearchBox = styled.div`
  width: 13%;
  height: 2.625rem;
  background-color: rgba(255, 255, 255, 0.4);
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  img {
    transition: 0.3s ease-in-out;
  }
  :hover {
    background-color: rgba(100, 100, 100, 0.5);
    img {
      transform: scale(1.1);
    }
  }
  @media (max-width: 1340px) {
    width: auto;
    background-color: inherit;
    padding-right: 0;
    :hover {
      background-color: inherit;
    }
  }
  @media (max-width: 1020px) {
    img {
      width: 24px;
    }
    margin-left: 0.5rem;
  }
`

const Search = () => {
  return (
    <SearchBox>
      <img src={icon} alt="Search Icon" />
    </SearchBox>
  )
}

export default Search
