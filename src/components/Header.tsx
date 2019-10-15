import React, { FC } from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

interface HeaderProps {
  siteTitle: string
}

export const Header: FC<HeaderProps> = ({ siteTitle = '' }) => (
  <header
    css={css({
      marginTop: '30px',
      textAlign: 'left',
      marginBottom: '45px',
    })}
  >
    <Link
      css={css`
        font-weight: normal;
        font-size: 32px;
        text-decoration: none;
        font-family: 'Lato', sans-serif;
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
  </header>
)
