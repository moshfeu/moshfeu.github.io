// @ts-check
import React from "react"
import { Link } from "gatsby"
import { css, Flex } from "theme-ui"
import Styles from "./footer.module.scss"

const Footer = ({ previous, next }) => {
  return (
    <footer className={Styles.footer}>
      {(previous || next) && (
        <Flex
          as="ul"
          css={css({
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 2,
          })}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </Flex>
      )}
      © {new Date().getFullYear()} - Moshe Feuchtwander
    </footer>
  )
}

export default Footer
