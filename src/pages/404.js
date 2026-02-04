import React from "react"
import { graphql } from "gatsby"
import Layout from "../gatsby-theme-blog/components/layout"
import PostList from "gatsby-theme-blog/src/components/post-list"

export default function NotFound({
  location,
  data: {
    allBlogPost: { nodes: posts },
    site: {
      siteMetadata: { title },
    },
  },
}) {
  return (
    <Layout>
      <h1>Page Not Found</h1>
      <p>Oops, we couldn't find this page!</p>
      <p>Here are the latest posts</p>
      <PostList posts={posts} />
    </Layout>
  )
}

export const listQuery = graphql`
  query ListQuery {
    allBlogPost(limit: 3) {
      nodes {
        title
        slug
        excerpt
        date(formatString: "MMMM Do, YYYY")
        tags
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
