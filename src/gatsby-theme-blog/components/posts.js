import React from "react"

import SEO from "gatsby-theme-blog/src/components/seo"
import PostList from "gatsby-theme-blog/src/components/post-list"
import Layout from "../components/layout"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <>
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <main>
        <PostList posts={posts} />
      </main>
    </Layout>
  </>
)

export default Posts