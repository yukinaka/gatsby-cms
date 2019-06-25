import React from 'react'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'

import Layout from '../components/layout'
import SEO from '../components/seo'

const TagPage = ({ data, pageContext }) => (
  <Layout>
    <SEO title="yukinaka[log]" />
    <h1>Tag: {pageContext.tag}</h1>
    <Posts posts={data.allContentfulBlogPosts.edges} />
  </Layout>
)
export default TagPage

export const query = graphql`
  query($tag: String!) {
    allContentfulBlogPosts(
      filter: { tags: { eq: $tag } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug
          tags
          content {
            childMarkdownRemark {
              html
            }
            id
            content
          }
          createdAt
        }
      }
    }
  }
`
