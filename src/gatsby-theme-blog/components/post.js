import React from "react"

import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from "gatsby-theme-blog/src/components/seo"
import PostTitle from "gatsby-theme-blog/src/components/post-title"
import PostDate from "gatsby-theme-blog/src/components/post-date"
import PostHero from "gatsby-theme-blog/src/components/post-hero"

import Layout from "./layout"
import Link from '../../components/link'
import Tags from "../../components/tags"

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
    <>
      <Layout location={location} title={title} {...{ previous, next }}>
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
              <Tags tags={post.tags} />
            </header>
            <section>
              <MDXProvider
                components={{
                  a: Link,
                }}
              >
                <MDXRenderer>{post.body}</MDXRenderer>
              </MDXProvider>
            </section>
          </article>
        </main>
      </Layout>
    </>
  )
}

export default Post
