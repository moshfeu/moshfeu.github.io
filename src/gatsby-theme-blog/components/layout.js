import React from "react"
import { css, Styled } from "theme-ui"
import Header from "./header"
import useBlogThemeConfig from "gatsby-theme-blog/src/hooks/configOptions";
import Helmet from "react-helmet"
import Footer from "../../components/footer"

import "../../styles/global.scss";
import styles from "./layout.module.scss"

const Layout = ({ children, previous, next, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig

  return (
    <Styled.root className={styles.root}>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <Header {...props} />
      <div className={styles.content}>
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 4,
          })}
        >
          {children}
        </div>
      </div>
      <Footer {...{ previous, next }} />
    </Styled.root>
  )
}

export default Layout
