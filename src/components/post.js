// @ts-check

import React from "react"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import PostTitle from "gatsby-theme-blog/src/components/post-title"
import PostDate from "gatsby-theme-blog/src/components/post-date"

import PostHero from "../gatsby-theme-blog/components/post-hero"
import Layout from "../gatsby-theme-blog/components/layout"
import SEO from "../gatsby-theme-blog/components/seo"
import Tags from "./tags"
import components from "./mdx/components"
import { graphql } from "gatsby"

const Post = ({
  data: {
    mdx: post,
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
          title={post.frontmatter.title}
          description={post.excerpt}
          imageSource={
            post.childMdxBlogPost?.socialImage?.childImageSharp?.fluid.src
              ? post.childMdxBlogPost?.socialImage?.childImageSharp?.fluid.src
              : post.frontmatter.image?.childImageSharp?.fluid.src
          }
          imageAlt={post.imageAlt}
          canonical={post.frontmatter.canonical}
        />
        <main>
          <article>
            <header>
              <PostHero post={post} />
              <PostTitle>{post.frontmatter.title}</PostTitle>
              <PostDate>{post.frontmatter.date}</PostDate>
              <Tags tags={post.frontmatter.tags} />
            </header>
            <section>
              <MDXProvider components={components}>
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

export const query = graphql`
  query PostQuery(
    $slug: String!
    $previousId: String
    $nextId: String
    $maxWidth: Int
  ) {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    mdx(slug: { eq: $slug }) {
      id
      excerpt
      body
      slug
      frontmatter {
        canonical
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: $maxWidth) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
      childMdxBlogPost {
        imageAlt
        imageCaptionLink
        imageCaptionText
        socialImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    }
    previous: blogPost(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: blogPost(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`

// query Tags($maxWidth: Int = 0) {
//   mdx {
//     id
//     excerpt
//     body
//     slug
//     frontmatter {
//       canonical
//       title
//       tags
//       date(formatString: "MMMM DD, YYYY")
//       image {
//         childImageSharp {
//           fluid(maxWidth: $maxWidth) {
//             src
//           }
//         }
//       }
//     }
//   }
// }

// mdx(id: { eq: $id }) {
//   id
//   excerpt
//   body
//   slug
//   title
//   tags
//   date(formatString: "MMMM DD, YYYY")
//   image {
//     childImageSharp {
//       fluid(maxWidth: $maxWidth) {
//         ...GatsbyImageSharpFluid
//         src
//       }
//     }
//   }
//   imageAlt
//   imageCaptionText
//   imageCaptionLink
//   socialImage {
//     childImageSharp {
//       fluid {
//         ...GatsbyImageSharpFluid
//         src
//       }
//     }
//   }
// }
