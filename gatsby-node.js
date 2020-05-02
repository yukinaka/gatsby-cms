/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = (
    await graphql(`
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
  ).data

  const tagResult = (
    await graphql(`
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
  ).data

  //tagの重複を取り除いた配列を作成
  const tagsArray = tagResult.allContentfulBlogPosts.edges
    .map(tag => tag.node.tags)
    .flatMap(x => x)
    .filter((x, i, array) => array.indexOf(x) === i)

  //一覧ページを作成
  result.allContentfulBlogPosts.edges.forEach(post => {
    const { slug } = post.node

    createPage({
      path: slug,
      component: path.resolve('./src/templates/blog-post.tsx'),
      context: {
        slug: slug,
      },
    })
  })

  //タグページを作成
  tagsArray.forEach(tag => {
    const slug = tag.toLowerCase()

    createPage({
      path: `tags/${slug}`,
      component: path.resolve('./src/templates/tags.tsx'),
      context: {
        tag,
        slug,
      },
    })
  })
}
