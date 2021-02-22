// @ts-check
import React, { useCallback, useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BlankLink } from "./mdx/link"
import Styles from "./social-nav.module.scss"

export default function SocialNav() {
  const {
    site: {
      siteMetadata: { social },
    },
  } = useStaticQuery(siteQuery)
  const [socials, setSocials] = useState([])
  const [loaded, setLoaded] = useState(false)

  const enrichSocial = useCallback(async () => {
    const newSocials = await Promise.all(
      social.map(async link => {
        if (!link?.name) {
          return link
        }
        const { default: Icon } = await import(
          `../../content/assets/social/${link.name}.svg`
        )

        return {
          ...link,
          Icon,
        }
      })
    )
    setSocials(newSocials)
    setLoaded(true)
  }, [social]);

  useEffect(() => {
    enrichSocial();
  }, [enrichSocial])

  if (!loaded) {
    return <></>
  }

  return (
    <nav>
      {socials.map(({ name, url, Icon }) => {
        return (
          <BlankLink className={Styles.link} href={url} key={name}>
            <Icon />
          </BlankLink>
        )
      })}
    </nav>
  )
}

const siteQuery = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        social {
          name
          url
        }
      }
    }
  }
`
