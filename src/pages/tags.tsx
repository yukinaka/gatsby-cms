import React from 'react'
import { graphql } from 'gatsby'
import { Tags } from '../components/Tags'
import { Layout } from "../components/Layout";
import { Seo } from "../components/seo";

interface Props {
  data: {
    allContentfulBlogPosts: {
      edges: {
        node: {
          tags: string[]
        }
      }[]
    }
  }
}

const TagsPage: React.FunctionComponent<Props> = ({ data }) => {
  const { edges } = data.allContentfulBlogPosts
  const tags: string[] = edges
    .map(x => x.node.tags)
    .flatMap(x => x)
    .filter((x, i, array) => array.indexOf(x) === i)

  return <TagsComponent tags={tags} />
}

type ComponentProps = {
  tags: string[]
}

const TagsComponent: React.FunctionComponent<ComponentProps> = ({ tags }) => {
  return (
    <Layout>
      <>
        <Seo />
        <Tags tags={tags} />
      </>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query tagsQuery {
    allContentfulBlogPosts {
      edges {
        node {
          tags
        }
      }
    }
  }
`
