import React from "react"
import { graphql } from "gatsby"

import Layout from "../gatsby-theme-blog/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import PostList from "gatsby-theme-blog/src/components/post-list"

const CategoryTemplate = ({
  location,
  pageContext,
  data: {
    allMdxBlogPost: { nodes: posts, totalCount },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const { tag } = pageContext
  return (
    <Layout location={location} title={title}>
      <div className="tag-container">
        <SEO title={`Posts in tag "${tag}"`} />
        <h1>Tag: {tag} ({totalCount} post{totalCount > 1 ? 's' : ''})</h1>
        <PostList posts={posts} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Tags($tag: [String]) {
    allMdxBlogPost(filter: { tags: { in: $tag } }) {
      nodes {
        title
        slug
        excerpt
        date(formatString: "MMMM DD, YYYY")
      }
      totalCount,
    },
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default CategoryTemplate
