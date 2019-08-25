import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const TagList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  display: flex;
`

const TagListItem = styled.li`
  margin-right: 10px;
`
const Tag = styled(Link)`
  text-decoration: none;
  display: block;
  border: 1px solid #4a4a4a;
  color: #4a4a4a;
  padding: 3px 10px;
  font-size: 14px;
  border-radius: 4px;
  transition: 200ms;
  &:hover {
    background: #4a4a4a;
    color: #fff;
  }
`

const Tags = ({ tags }) => (
  <TagList>
    {tags.map(tag => {
      const url = tag.toLowerCase()
      return (
        <TagListItem key={tag}>
          <Tag to={`/${url}`}>{tag}</Tag>
        </TagListItem>
      )
    })}
  </TagList>
)

export default Tags
