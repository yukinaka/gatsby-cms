import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const TagList = styled.ul`
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

interface Props {
  tags: string[]
}

export const Tags: React.FunctionComponent<Props> = ({ tags }) => {
  return (
    <TagList>
      {tags.map(tag => {
        const url = tag.toLowerCase()

        return (
          <li css={TagListItem} key={tag}>
            <Link css={Tag} to={`/${url}`}>
              {tag}
            </Link>
          </li>
        )
      })}
    </TagList>
  )
}
