/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Header } from './Header'

import { Global, css } from '@emotion/core'
import 'sanitize.css'

const Layout = ({ children }) => (
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
      render={data => (
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
            © {new Date().getFullYear()}
          </footer>
        </div>
      )}
    />
  </React.Fragment>
)

export default Layout
