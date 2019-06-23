import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Posts from '../components/Posts';

import Layout from '../components/layout'
import SEO from '../components/seo'

interface IndexPageProps {
  data: any,
}

const IndexPage: FC<IndexPageProps> = ({ data }) => (
  <Layout>
    <SEO title='YNK' />
    <Posts posts={data.allContentfulBlogPosts.edges} />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlogPosts(
      sort: {
        fields: [createdAt], order: DESC
      }
    ) {
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
