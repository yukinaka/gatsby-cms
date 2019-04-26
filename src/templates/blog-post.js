import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Img from "gatsby-image"

const BlogPost = ({data}) => {
  return (
    <div dangerouslySetInnerHTML={{__html: data.contentfulBlogPosts.content.childMarkdownRemark.html}} />
  )
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

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