// Thanks to https://mdawar.dev/blog/mdx-open-links-in-new-page
import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Styles from "./link.module.scss"

export default function Link({ children, href }) {
  if (href.startsWith("/")) {
    return <GatsbyLink className={Styles.link} to={href}>{children}</GatsbyLink>
  }

  const onPage = href.startsWith("#")

  return (
    <OutboundLink
      className={Styles.link}
      href={href}
      target={onPage ? null : "_blank"}
      rel={onPage ? null : "noopener noreferrer"}
    >
      {children}
    </OutboundLink>
  )
}
