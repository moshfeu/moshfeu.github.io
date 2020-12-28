import React from "react"
import { graphql } from "gatsby"
import Layout from "gatsby-theme-blog/src/components/layout"
import PostList from "gatsby-theme-blog/src/components/post-list"
// import Bio from "gatsby-theme-blog/src/components/bio"
import Footer from "gatsby-theme-blog/src/components/post-footer"
// import Bio from "../gatsby-theme-blog/components/bio-content"
import Header from "../gatsby-theme-blog/components/header"

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
      <Header location={location} title={title} />
      <h1>Page Not Found</h1>
      <p>Oops, we couldn't find this page!</p>
      <p>Here are the latest posts</p>
      <PostList posts={posts} />
      <Footer />
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
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
