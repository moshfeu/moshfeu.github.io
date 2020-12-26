import React from "react"
import Helmet from "react-helmet"
import GtbHeader from "gatsby-theme-blog/src/components/header"
import logo from "../../../content/assets/avatar.png"

export default function Header(props) {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={logo} />
      </Helmet>
      <GtbHeader {...props} />
    </>
  )
}
