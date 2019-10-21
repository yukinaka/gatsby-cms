import React from 'react'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'

import { Layout } from '../components/Layout'
import { Seo } from '../components/seo'
import { Post } from '../types'

interface Props {
  data: {
    allContentfulBlogPosts: {
      edges: Post[]
    }
  }
}

const IndexPage: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <Layout>
      <>
        <Seo />
        <Posts posts={data.allContentfulBlogPosts.edges} />
      </>
    </Layout>
  )
}

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
