import React from "react"
import { graphql } from "gatsby"

import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import PostList from "gatsby-theme-blog/src/components/post-list"

const CategoryTemplate = ({
  location,
  pageContext,
  data: {
    allMdxBlogPost: { nodes: posts },
  },
}) => {
  const { tag } = pageContext
  return (
    <Layout location={location} title={`Posts in tag "${tag}"`}>
      <div className="tag-container">
        <SEO title={`Posts in tag "${tag}"`} />
        <h1>Tag: {tag}</h1>
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
      totalCount
    }
  }
`

export default CategoryTemplate
