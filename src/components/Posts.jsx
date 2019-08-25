import { Link } from 'gatsby'
import React, { FC } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import dayjs from 'dayjs'
import Tags from './Tags'
import { Post } from '../utils/type'
import styled from '@emotion/styled'

export const PublishDate = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 12px;
`

const Posts = ({ posts }) => (
  <ul css={
    css`
      list-style: none;
      padding: 0;
      margin: 0;
    `
  }>
    {posts.map(({ node }) => {
      const date = dayjs(node.createdAt).format('YYYY-MM-DD')

      return (
        <li css={css`
            margin-top: 60px;
            &:first-of-type {
              margin-top: 0;
            }
        `} key={node.slug}>
          <PublishDate>{date}</PublishDate>
          <h2 css={
            css`
              font-size: 24px;
              font-weight: bold;
              margin: 0;
            `
          }>
            <Link to={`/${node.slug}`}>{node.title}</Link>
          </h2>
          <Tags tags={node.tags} />
        </li>
      )
    })}
  </ul>
)

export default Posts
