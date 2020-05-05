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
  pageContext: {
    slug: string
    tag: string
  }
}

const TagPage: React.FunctionComponent<Props> = ({ data, pageContext }) => {
  return (
    <Layout>
      <>
        <Seo title={`Tag: ${pageContext.tag}`} />
        <h2>Tag: {pageContext.tag}</h2>
        <Posts posts={data.allContentfulBlogPosts.edges} />
      </>
    </Layout>
  )
}

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
