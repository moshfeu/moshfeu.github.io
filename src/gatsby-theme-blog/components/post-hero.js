import React from "react"
import Image from "gatsby-image"

import PostHeroCaption from "./post-hero-caption"

const PostHero = ({ post }) => (
  <>
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
  </>
)

export default PostHero
