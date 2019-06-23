import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout";
import TagList from "../components/TagList";
import dayjs from 'dayjs';

const BlogPost = ({ data }) => {
  const date = dayjs(data.contentfulBlogPosts.createdAt).format('YYYY-MM-DD');
  return (
    <Layout>
      <span>{date}</span>
      <h1>{data.contentfulBlogPosts.title}</h1>
      <TagList tags={data.contentfulBlogPosts.tags} />
      <div dangerouslySetInnerHTML={{ __html: data.contentfulBlogPosts.content.childMarkdownRemark.html }} />
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPosts(slug: {eq: $slug}) {
      title
      tags
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