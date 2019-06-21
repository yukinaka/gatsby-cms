import React from 'react'
import styled from '@emotion/styled';
import dayjs from 'dayjs'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

// interface IndexPageProps {
//   data: any,
// }

const Posts = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PostItem = styled.li`
  margin-top: 60px;
  &:first-child {
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
  border: 1px solid #1a8ef1;
  color: #1a8ef1;
  padding: 3px 10px;
  font-size: 14px;
  border-radius: 4px;
  transition: 200ms;
  &:hover {
    background: #1a8ef1;
    color: #FFF;
  }
`

const TagPage = ({ data }) => (
  <Layout>
    <SEO title='YNK' keywords={[`gatsby`, `application`, `react`]} />
    aaa
    <Posts>
      {data.allContentfulBlogPosts.edges.map(({ node }, i) => {
        const date = dayjs(node.createdAt).format('YYYY-MM-DD');
        console.log(node);
        return (
          <PostItem key={node.slug}>
            <PublishDate>{date}</PublishDate>
            <PostHeading><Link to={node.slug}>{node.title}</Link></PostHeading>
            <TagList>
              {/*{node.tags.map(tag => <TagListItem key={tag.slug}><Tag to={tag.slug}>{tag.name}</Tag></TagListItem>)}*/}
            </TagList>
          </PostItem>
        )
      })}
    </Posts>
  </Layout>
)
export default TagPage;

export const query = graphql`
  query($slug: String!) {
    allContentfulBlogPosts(
        filter: {slug: {in: ["tags"]}}
#      filter: { tags: { elemMatch: { slug: { eq: $slug}} }}
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug
          content {
            childMarkdownRemark {
              html
            }
            id
            content
          }
          createdAt
        }
      }
    }
  }
`
