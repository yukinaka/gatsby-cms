const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
   {
      allContentfulBlogPosts {  
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulBlogPosts.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        slug: node.slug,
      },
    })
  })

  const tagResult = await graphql(`
   {
      allContentfulBlogPosts {
        edges {
          node {
            tags
          }
        }
      }
    }
  `)

  tagResult.data.allContentfulBlogPosts.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve('./src/templates/tags.js'),
      context: {
        slug: node.slug,
      },
    })
  })
}
