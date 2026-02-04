import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import PostHeroCaption from "./post-hero-caption"
import { css } from "theme-ui"

const PostHero = ({ post }) => {
  const image = getImage(post?.frontmatter?.image)

  return (
    <div
      css={css({
        marginTop: 2,
      })}
    >
      {image && (
        <>
          <GatsbyImage
            image={image}
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
}

export default PostHero
