import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

interface HeaderProps {
  siteTitle: string
}

export const Header: React.FunctionComponent<HeaderProps> = ({ siteTitle }) => (
  <header
    css={css({
      marginTop: '30px',
      textAlign: 'left',
      marginBottom: '45px',
    })}
  >
    <h1
      css={css`
        margin: 0;
      `}
    >
      <Link
        css={css`
          font-weight: normal;
          font-size: 32px;
          text-decoration: none;
          font-family: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
          color: #4a4a4a;
          &:hover,
          &:visited {
            color: #4a4a4a;
          }
        `}
        to="/"
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)
