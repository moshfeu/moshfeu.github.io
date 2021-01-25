import React from "react"
import Image from "gatsby-image"

import PostHeroCaption from "./post-hero-caption"
import { css } from "theme-ui"

const PostHero = ({ post }) => (
  <div
    css={css({
      marginTop: 2,
    })}
  >
    {post?.frontmatter?.image?.childImageSharp && (
      <>
        <Image
          fluid={post.frontmatter.image.childImageSharp.fluid}
          alt={post.imageAlt ? post.imageAlt : post.excerpt}
        />
        <PostHeroCaption
          text={post.imageCaptionText}
          url={post.imageCaptionLink}
        />
      </>
    )}
    {post?.frontmatter?.subtitle && (
      <em
        css={css({
          textAlign: "center",
          display: "block",
          fontSize: "0.9rem",
          paddingBlock: 1,
        })}
      >
        {post.frontmatter.subtitle}
      </em>
    )}
  </div>
)

export default PostHero
