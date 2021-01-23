// @ts-check

const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const tagTemplate = path.resolve("src/templates/tag.js")

  const result = await graphql(`
    {
      tagsGroup: allMdxBlogPost {
        group(field: tags) {
          fieldValue
        }
      }
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tag/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

const PostTemplate = require.resolve(`./src/components/post`)

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions
  const { context } = page
  if (!context.id) {
    return
  }
  const newPage = {
    ...page,
    component: PostTemplate,
    context: {
      ...context,
      slug: page.path.replace(/\//g, ""),
    },
  }
  deletePage(page)
  createPage(newPage)
}

exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions

  await createNodeField({
    node,
    name: `canonical`,
    value: node.frontmatter?.canonical,
  })
}

// exports.createSchemaCustomization = ({ actions, schema }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type PostWithCanonical implements BlogPost @dontInfer {
//       canonical: String
//     }
//   `
//   createTypes(typeDefs)

// }
