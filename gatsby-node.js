const path = require('path')
const _ = require('lodash');

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

  const tagsArray = tagResult.data.allContentfulBlogPosts.edges.map(({ node }) => node.tags);
  const _tagsArray = _.uniq(_.flatten(tagsArray));

  _tagsArray.forEach((tag) => {
    const slug = tag.toLowerCase();

    createPage({
      path: slug,
      component: path.resolve('./src/templates/tags.js'),
      context: {
        tag,
        slug,
      },
    })
  })
}
