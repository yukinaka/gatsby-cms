import React from 'react'
import { graphql } from 'gatsby'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Layout from '../components/Layout'
import TagList from '../components/Tags'
import { TwitterShareButton } from 'react-share'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { PublishDate } from '../components/Posts'

const BlogPost = ({ data }) => {
  const date = dayjs(data.contentfulBlogPosts.createdAt).format('YYYY-MM-DD')

  return (
    <Layout>
      <article>
        <PublishDate>{date}</PublishDate>
        <h1
          css={css`
            font-size: 30px;
            margin-top: 0;
            line-height: 1;
          `}
        >
          {data.contentfulBlogPosts.title}
        </h1>
        <div
          css={css`
            margin-bottom: 60px;
          `}
          dangerouslySetInnerHTML={{
            __html: data.contentfulBlogPosts.content.childMarkdownRemark.html,
          }}
        />
      </article>
      <TagList tags={data.contentfulBlogPosts.tags} />
      <div
        css={css`
          margin-top: 60px;
          padding-bottom: 40px;
          border-bottom: 1px solid #ddd;
          display: flex;
          align-items: center;
        `}
      >
        <TwitterShareButton
          css={css`
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
          `}
          url={`${data.site.siteMetadata.url}${data.contentfulBlogPosts.slug}`}
          via={data.site.siteMetadata.twitterHandle}
          title={data.contentfulBlogPosts.title}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </TwitterShareButton>
      </div>
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
