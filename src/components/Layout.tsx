import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Header } from './Header'
import dayjs from 'dayjs'
import { Global, css } from '@emotion/core'
import 'sanitize.css'

interface Props {
  children: React.ReactElement
}

interface LayoutData {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

console.log(process.env.GATSBY_ACTIVE_ENV)
console.log(process.env.CONTENTFUL_HOST)
console.log(process.env.ACCESS_TOKEN)

export const Layout: React.FunctionComponent<Props> = ({ children }) => (
  <React.Fragment>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=Lato|Noto+Sans+JP&display=swap');

        html,
        body {
          font-family: 'Noto Sans JP', sans-serif;
          font-size: 16px;
          color: #4a4a4a;
          margin: 0;
          padding: 0;
        }
        a {
          color: #1a8ef1;
          text-decoration: none;
          transition: 200ms;
          &:hover {
            color: #305d84;
          }
        }
      `}
    />
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data: LayoutData) => (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            max-width: 700px;
            padding-left: 10px;
            padding-right: 10px;
            width: 100%;
            margin: auto;
          `}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
          <main
            css={css`
              margin-bottom: 60px;
            `}
          >
            {children}
          </main>
          <footer
            css={css`
              text-align: center;
              margin-top: auto;
              padding: 20px 0;
            `}
          >
            &copy; {dayjs().year()}
          </footer>
        </div>
      )}
    />
  </React.Fragment>
)
