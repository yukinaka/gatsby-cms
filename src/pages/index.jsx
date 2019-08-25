import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <Posts posts={data.allContentfulBlogPosts.edges} />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlogPosts(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          createdAt
          tags
        }
      }
    }
  }
`
