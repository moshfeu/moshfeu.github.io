// @ts-check

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  description,
  lang,
  meta,
  title,
  imageSource,
  imageAlt,
  canonical,
  keywords,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const image = imageSource
    ? `${site.siteMetadata.siteUrl}${imageSource}`
    : null
  const imageAltText = imageAlt || metaDescription
  meta = [
    ...meta,
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    {
      name: `keywords`,
      content: keywords?.join(),
    }
  ]
    .concat(
      imageSource
        ? [
            {
              name: `og:image`,
              content: image,
            },
            {
              name: `og:image:alt`,
              content: imageAltText,
            },
            {
              name: `twitter:image`,
              content: image,
            },
            {
              name: `twitter:image:alt`,
              content: imageAltText,
            },
            {
              name: `twitter:card`,
              content: `summary_large_image`,
            },
          ]
        : [
            {
              name: `twitter:card`,
              content: `summary`,
            },
          ]
    )
    .concat(meta)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={meta}
      link={
        canonical ? [{ rel: "canonical", key: canonical, href: canonical }] : []
      }
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  canonical: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
}

export default SEO
