import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'gatsby'

const TagList = css`
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  display: flex;
`

const TagListItem = css`
  margin-right: 10px;
`
const Tag = css`
  text-decoration: none;
  display: block;
  border: 1px solid #4a4a4a;
  color: #4a4a4a;
  padding: 3px 10px;
  font-size: 14px;
  border-radius: 4px;
  transition: 200ms;
  &:hover {
    background: #aaa;
    color: #fff;
  }
`

const Tags = ({ tags }) => (
  <ul css={TagList}>
    {tags.map(tag => {
      const url = tag.toLowerCase()
      return (
        <li css={TagListItem} key={tag}>
          <Link css={Tag} to={`/${url}`}>{tag}</Link>
        </li>
      )
    })}
  </ul>
)

export default Tags
