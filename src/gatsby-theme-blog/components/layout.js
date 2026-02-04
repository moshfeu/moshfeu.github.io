import React from "react"
import { css } from "theme-ui"
import Helmet from "react-helmet"
import useBlogThemeConfig from "gatsby-theme-blog/src/hooks/configOptions"
import Header from "./header"
import Footer from "../../components/footer"
import * as styles from "./layout.module.scss"
import "../../styles/global.scss"

const Layout = ({ children, previous, next, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig

  return (
    <div className={styles.root}>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
        <meta name="google-site-verification" content="hpJ5hHMHz7pz5hEBUsKSCUaVIZg8rMKiQ86uyqVuFw4" />
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
    </div>
  )
}

export default Layout
