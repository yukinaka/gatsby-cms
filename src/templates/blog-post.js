import React from 'react'
import { graphql } from 'gatsby'

const BlogPost = ({ data }) => <div dangerouslySetInnerHTML={{ __html: data.contentfulBlogPosts.content.childMarkdownRemark.html }} />

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPosts(slug: {eq: $slug}) {
      title
      createdAt(formatString: "MMMM DD, YYYY")
      image {
        sizes(maxWidth: 800) {
          ...GatsbyContentfulSizes
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
