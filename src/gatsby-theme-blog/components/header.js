/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Helmet from "react-helmet"
import { css, Box } from "theme-ui"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useGAEvent } from "../../hooks/useGAEvent"

import logo from "../../../content/assets/avatar.png"
import * as styles from "./header.module.scss"
import SocialNav from "../../components/social-nav"

export default function Header({ title }) {
  const toggleDarkMode = useGAEvent(
    {
      event_category: "ui",
      event_label: "toggleDarkMode",
      value:
        typeof document !== "undefined" &&
        document.body.classList.contains("dark-mode").toString(),
    },
    () => {
      document.body.classList.toggle("dark-mode")
    }
  )

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={logo} />
      </Helmet>
      <header className={styles.header}>
        <div
          sx={{
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 3,
            display: "flex",
            justifyContent: [null, "space-between"],
            alignItems: [null, "center"],
            flexDirection: ["column", "row"],
          }}
        >
          <Title>{title}</Title>
          <SocialNav />
        </div>
        <button
          aria-label="Toggle Dark Mode"
          className={styles.toggleDark}
          onClick={toggleDarkMode}
        >
          <span></span>
        </button>
      </header>
    </>
  )
}

const Title = ({ children }) => (
  <Box
    css={css({
      my: 0,
      fontSize: 4,
    })}
  >
    <Link to={`/`}>
      <Avatar />
      {children}
    </Link>
  </Box>
)

const Avatar = () => {
  const data = useStaticQuery(avatarQuery)
  const {
    site: {
      siteMetadata: { author },
    },
    avatar,
  } = data
  return (
    <img
      src={avatar.childImageSharp.fixed.src}
      srcSet={avatar.childImageSharp.fixed.srcSet}
      alt={author}
      css={css({
        mr: 2,
        mb: 0,
        width: 48,
        minWidth: 48,
        borderRadius: 99999,
      })}
    />
  )
}

const avatarQuery = graphql`
  query AvatarQuery {
    site {
      siteMetadata {
        author
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
