import { Link } from 'gatsby'
import React, { FC } from 'react'
import styled from '@emotion/styled'
import dayjs from 'dayjs'
import Tags from './Tags'
import { Post } from '../utils/type'

const PostsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const PostItem = styled.li`
  margin-top: 60px;
  &:first-of-type {
    margin-top: 0;
  }
`
const PostHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`

const PublishDate = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 12px;
`

interface PostsPageProps {
  posts: { node: Post }[]
}

const Posts: FC<PostsPageProps> = ({ posts }) => (
  <PostsList>
    {posts.map(({ node }) => {
      const date: string = dayjs(node.createdAt).format('YYYY-MM-DD')

      return (
        <PostItem key={node.slug}>
          <PublishDate>{date}</PublishDate>
          <PostHeading>
            <Link to={`/${node.slug}`}>{node.title}</Link>
          </PostHeading>
          <Tags tags={node.tags} />
        </PostItem>
      )
    })}
  </PostsList>
)

export default Posts
