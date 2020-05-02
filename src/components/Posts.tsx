import { Link } from 'gatsby'
import React from 'react'
import { css } from '@emotion/core'
import dayjs from 'dayjs'
import { Tags } from './Tags'
import styled from '@emotion/styled'
import { PostsResponse } from '../types'

export const PublishDate = styled.time`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
`

interface Props extends PostsResponse {}

const Posts: React.FunctionComponent<Props> = ({ posts }) => (
  <ul
    css={css`
      list-style: none;
      padding: 0;
      margin: 0;
    `}
  >
    {posts.map(post => {
      const date = dayjs(post.node.createdAt).format('YYYY-MM-DD')

      return (
        <li
          css={css`
            margin-top: 60px;
            &:first-of-type {
              margin-top: 0;
            }
          `}
          key={post.node.slug}
        >
          <PublishDate date-time={date}>{date}</PublishDate>
          <h2
            css={css`
              font-size: 24px;
              font-weight: bold;
              margin: 0;
            `}
          >
            <Link to={`/${post.node.slug}`}>{post.node.title}</Link>
          </h2>
          <Tags tags={post.node.tags} />
        </li>
      )
    })}
  </ul>
)

export default Posts
