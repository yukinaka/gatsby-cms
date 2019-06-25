import React, { FC } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import TagList from '../components/Tags'
import dayjs from 'dayjs'
import { PublishDate } from '../utils/styled';
import { Post } from '../utils/type'

type Article = Post & {
  content: {
    childMarkdownRemark: {
      html: string
    }
  }
}

interface BlogPostProps {
  data: {
    contentfulBlogPosts: Article
  }
}

const Heading = styled.h1`
  font-size: 30px;
  margin-top: 0;
`

const Content = styled.div`
  margin-bottom: 60px;
`

const BlogPost: FC<BlogPostProps> = ({ data }) => {
  const date: string = dayjs(data.contentfulBlogPosts.createdAt).format(
    'YYYY-MM-DD'
  )

  return (
    <Layout>
      <article>
        <PublishDate>{date}</PublishDate>
        <Heading>{data.contentfulBlogPosts.title}</Heading>
        <Content
          dangerouslySetInnerHTML={{
            __html: data.contentfulBlogPosts.content.childMarkdownRemark.html,
          }}
        />
      </article>
      <TagList tags={data.contentfulBlogPosts.tags} />
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPosts(slug: { eq: $slug }) {
      title
      tags
      createdAt
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
