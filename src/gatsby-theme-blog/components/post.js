import React from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import PostTitle from "gatsby-theme-blog/src/components/post-title"
import PostDate from "gatsby-theme-blog/src/components/post-date"
import PostFooter from "gatsby-theme-blog/src/components/post-footer"
import PostHero from "gatsby-theme-blog/src/components/post-hero"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => {
  return (
    <Layout location={location} title={title}>
      <SEO
        title={post.title}
        description={post.excerpt}
        imageSource={
          post.socialImage
            ? post.socialImage?.childImageSharp?.fluid.src
            : post.image?.childImageSharp?.fluid.src
        }
        imageAlt={post.imageAlt}
      />
      <main>
        <article>
          <header>
            <PostHero post={post} />
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.date}</PostDate>
          </header>
          <section>
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
        </article>
      </main>
      <PostFooter {...{ previous, next }} />
    </Layout>
  )
}

export default Post
