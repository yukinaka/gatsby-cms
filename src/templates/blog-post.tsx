import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Layout } from '../components/Layout'
import { Tags } from '../components/Tags'
import { TwitterShareButton } from 'react-share'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { PublishDate } from '../components/Posts'
import styled from '@emotion/styled'
import { Seo } from '../components/seo'

interface Props {
  data: {
    contentfulBlogPosts: {
      content: {
        childMarkdownRemark: {
          html: string
        }
      }
      image: any[]
      slug: string
      tags: string[]
      title: string
      publishedAt: Date
    }
    site: {
      siteMetadata: {
        title: string
        twitterHandle: string
        url: string
      }
    }
  }
}

const ContentComponent = styled.div`
  p {
    line-height: 2;
  }
  pre[class*='language-'] {
    margin-top: 0;
    &:not(:only-child) {
      border-top-left-radius: 0;
    }
  }
  .gatsby-code-title {
    border-radius: 0.5rem 0.5rem 0 0;
    border: 0.3rem solid hsl(0, 0%, 33%);
    border-bottom: hsl(0, 0%, 8%);
    position: relative;
    top: 0.3rem;
    z-index: 1;
    box-shadow: 1px 1px 0.5rem black inset;
    overflow: auto;
    padding: 0.5rem;
    display: inline-flex;
    background: hsl(0, 0%, 8%);
    color: white;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    font-size: 0.8rem;
  }
  img {
    border: 2px solid #4a4a4a;
  }
`

const BlogPost: React.FunctionComponent<Props> = ({ data }) => {
  const date = dayjs(data.contentfulBlogPosts.publishedAt).format('YYYY-MM-DD')

  return (
    <Layout>
      <>
        <Seo title={data.contentfulBlogPosts.title} />
        <article>
          <PublishDate data-time={date}>{date}</PublishDate>
          <h2
            css={css`
              font-size: 32px;
              margin-top: 0;
              line-height: 1.6;
            `}
          >
            {data.contentfulBlogPosts.title}
          </h2>
          <ContentComponent
            css={css`
              margin-bottom: 60px;
            `}
            dangerouslySetInnerHTML={{
              __html: data.contentfulBlogPosts.content.childMarkdownRemark.html,
            }}
          />
        </article>
        <Tags tags={data.contentfulBlogPosts.tags} />
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
            title={`${data.contentfulBlogPosts.title} | ${data.site.siteMetadata.title}`}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </TwitterShareButton>
        </div>
      </>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        twitterHandle
      }
    }
    contentfulBlogPosts(slug: { eq: $slug }) {
      title
      tags
      publishedAt
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
