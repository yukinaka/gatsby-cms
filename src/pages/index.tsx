import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'

import { Post } from '../utils/type'
import Layout from '../components/layout'
import SEO from '../components/seo'

interface IndexPageProps {
  data: {
    allContentfulBlogPosts: {
      edges: { node: Post }[]
    }
  }
}

const IndexPage: FC<IndexPageProps> = ({ data }) => (
  <Layout>
    {console.log(data)}
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
          createdAt(formatString: "MMMM DD, YYYY")
          tags
        }
      }
    }
  }
`
