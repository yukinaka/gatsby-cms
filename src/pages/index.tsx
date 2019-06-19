import React, { FC } from 'react'
import dayjs from 'dayjs'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

interface IndexPageProps {
  data: any,
}

const IndexPage: FC<IndexPageProps> = ({ data }) => (
  <Layout>
    <SEO title='YNK' keywords={[`gatsby`, `application`, `react`]} />
    <ul>

      {data.allContentfulBlogPosts.edges.map(({ node }, i) => {
        const date: string = dayjs(node.createdAt).format('YYYY-MM-DD');
        console.log(node);
        return (
          <li key={node.slug}>
            <Link to={node.slug}>
              <span>{date}</span>
              {node.title}
            </Link>
          </li>
        )
        // const date = parse(node.createdAt)
        // const formattedDate = format(date, 'YYYY/MM/DD')
        // return (
        //   <li key={node.slug} data-index={index}>
        //     <Link to={`${node.slug}`}>
        //       {node.title}{' '}
        //       <span className="index-list__date">{formattedDate}</span>
        //     </Link>
        //   </li>
        // )
      })}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlogPosts(
      sort: {
        fields: [createdAt], order: DESC
      }
    ) {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
