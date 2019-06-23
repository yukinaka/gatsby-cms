/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { FC } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled';

import Header from "./header"
import { Global, css } from '@emotion/core'
import 'sanitize.css'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 700px;
  width: 100%;
  margin: auto;
`
const GlobalFooter = styled.footer`
  text-align: center;
  margin-top: auto;
`;
interface LayoutProps {
  children: React.ReactNode,
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Global styles={css`
    @import url('https://fonts.googleapis.com/css?family=Lato|Noto+Sans+JP&display=swap');
   
    html, body {
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
  `} />
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
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <GlobalFooter>
            © {new Date().getFullYear()}
          </GlobalFooter>
        </Container>
      )}
    />
  </>
)

export default Layout
