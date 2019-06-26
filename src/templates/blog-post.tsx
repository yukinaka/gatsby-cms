import React, { FC } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import TagList from '../components/Tags'
import { TwitterShareButton } from 'react-share';
import dayjs from 'dayjs'
import { PublishDate } from '../utils/styled'
import { Post } from '../utils/type'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

type article = Post & {
  content: {
    childMarkdownRemark: {
      html: string
    }
  }
}

interface BlogPostProps {
  data: {
    site: {
      siteMetadata: {
        url: string
        twitterHandle: string
      }
    }
    contentfulBlogPosts: article
  }
}

const Heading = styled.h1`
  font-size: 30px;
  margin-top: 0;
  line-height: 1;
`

const Content = styled.div`
  margin-bottom: 60px;
`

const TweetBtn = styled(TwitterShareButton)`
  display: flex;
  align-items: center;
  margin-right: 5px;
  background: #1da1f2;
  color: #fff;
  width: 80px;
  height: 24px;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
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
      <TweetBtn
        url={`${data.site.siteMetadata.url}${data.contentfulBlogPosts.slug}`}
        via={data.site.siteMetadata.twitterHandle}
        title={data.contentfulBlogPosts.title}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </TweetBtn>
      <TagList tags={data.contentfulBlogPosts.tags} />
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        url
        twitterHandle
      }
    }
    contentfulBlogPosts(slug: { eq: $slug }) {
      title
      tags
      createdAt
      slug
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
