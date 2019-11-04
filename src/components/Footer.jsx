import React from "react"

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "5rem",
        backgroundColor: "var(--black)",
        color: "var(--white)",
        padding: "3rem 3rem 5rem 3rem",
        lineHeight: "3rem"
      }}
    >
      <p align="center" style={{ marginTop: "3rem" }}>
        Design & Code by Jordan Winslow.
      </p>
      <p align="center">
        Jordan Winslow is not affiliated or endorsed by CNBC or NBC Universal in
        any way.
      </p>
    </footer>
  )
}

export default Footer
