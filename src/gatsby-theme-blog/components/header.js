import React from "react"
import Helmet from "react-helmet"
import { css, Styled } from "theme-ui"
import { Link, useStaticQuery, graphql } from "gatsby"

import logo from "../../../content/assets/avatar.png"
import styles from "./header.module.scss"

export default function Header({
  title,
}) {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={logo} />
      </Helmet>
      <header className={styles.header}>
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 3,
          })}
        >
          <Title>{title}</Title>
        </div>
      </header>
    </>
  )
}

const Title = ({ children }) => (
  <Styled.h1
    css={css({
      my: 0,
      fontSize: 4,
    })}
  >
    <Link
      to={`/`}
    >
      <Avatar />
      {children}
    </Link>
  </Styled.h1>
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
