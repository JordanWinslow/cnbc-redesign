import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  position: absolute;
  z-index: 999;
  top: 2.5rem;
  background-color: var(--white);
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.3);
  min-width: 15rem;
  /*on small screens, nav component goes off screen for the last 2 links. This changes the orientation dynamically so that doesn't happen!*/
  @media (max-width: 1020px) {
    ${props =>
      props.category === "cnbcTV" || props.category === "politics"
        ? "right: 0;"
        : ""};
  }
`
const Link = styled.div`
  color: var(--black);
  padding: 15px 20px;
  font-family: "ProximaNova-Bold";
  font-size: 17px;
  border-bottom: 1px solid #ebebeb;
  transition: 0.3s ease-in-out;
  :hover {
    background-color: var(--black);
    color: var(--secondary);
  }
`

const DropDownMenu = ({ category }) => {
  return (
    <Container category={category}>
      {links[category].map(link => {
        return <Link href={link.link}>{link.title}</Link>
      })}
    </Container>
  )
}
DropDownMenu.propTypes = {
  category: PropTypes.string.isRequired
}
const links = {
  markets: [
    {
      title: "PRE-MARKETS",
      link: "#"
    },
    {
      title: "U.S.MARKETS",
      link: "#"
    },
    {
      title: "CURRENCIES",
      link: "#"
    },
    {
      title: "CRYPTOCURRENCY",
      link: "#"
    },
    {
      title: "FUTURES & COMMODITIES",
      link: "#"
    },
    {
      title: "BONDS",
      link: "#"
    },
    {
      title: "FUNDS & ETFS",
      link: "#"
    }
  ],
  business: [
    {
      title: "ECONOMY",
      link: "#"
    },
    {
      title: "FINANCE",
      link: "#"
    },
    {
      title: "HEALTH & SCIENCE",
      link: "#"
    },
    {
      title: "MEDIA",
      link: "#"
    },
    {
      title: "REAL ESTATE",
      link: "#"
    },
    {
      title: "ENERGY",
      link: "#"
    },
    {
      title: "TRANSPORTATION",
      link: "#"
    },
    {
      title: "INDUSTRIALS",
      link: "#"
    },
    {
      title: "RETAIL",
      link: "#"
    },
    {
      title: "WEALTH",
      link: "#"
    },
    {
      title: "SMALL BUSINESS",
      link: "#"
    }
  ],
  investing: [
    {
      title: "INVEST IN YOU",
      link: "#"
    },
    {
      title: "PERSONAL FINANCE",
      link: "#"
    },
    {
      title: "FINANCIAL ADVISORS",
      link: "#"
    },
    {
      title: "TRADING NATION",
      link: "#"
    },
    {
      title: "OPTIONS ACTION",
      link: "#"
    },
    {
      title: "ETF STREET",
      link: "#"
    },
    {
      title: "BUFFETT ARCHIVE",
      link: "#"
    },
    {
      title: "EARNINGS",
      link: "#"
    },
    {
      title: "TRADER TALK",
      link: "#"
    }
  ],
  tech: [
    {
      title: "CYBERSECURITY",
      link: "#"
    },
    {
      title: "ENTERPRISE",
      link: "#"
    },
    {
      title: "INTERNET",
      link: "#"
    },
    {
      title: "MEDIA",
      link: "#"
    },
    {
      title: "MOBILE",
      link: "#"
    },
    {
      title: "SOCIAL MEDIA",
      link: "#"
    },
    {
      title: "VENTURE CAPITAL",
      link: "#"
    },
    {
      title: "TECH GUIDE",
      link: "#"
    }
  ],
  politics: [
    {
      title: "WHITE HOUSE",
      link: "#"
    },
    {
      title: "POLICY",
      link: "#"
    },
    {
      title: "DEFENSE",
      link: "#"
    },
    {
      title: "CONGRESS",
      link: "#"
    },
    {
      title: "2020 ELECTIONS",
      link: "#"
    }
  ],
  cnbcTV: [
    {
      title: "LIVE TV",
      link: "#"
    },
    {
      title: "LIVE AUDIO",
      link: "#"
    },
    {
      title: "LATEST VIDEO",
      link: "#"
    },
    {
      title: "TOP VIDEO",
      link: "#"
    },
    {
      title: "CEO INTERVIEWS",
      link: "#"
    },
    {
      title: "BUSINESS DAY SHOWS",
      link: "#"
    },
    {
      title: "PRIMETIME SHOWS",
      link: "#"
    },
    {
      title: "CNBC WORLD",
      link: "#"
    },
    {
      title: "DIGITAL ORIGINALS",
      link: "#"
    },
    {
      title: "FULL EPISODES",
      link: "#"
    }
  ]
}
export default DropDownMenu
