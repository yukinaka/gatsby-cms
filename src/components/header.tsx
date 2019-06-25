import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Logo = styled(Link)`
  font-weight: normal;
  font-size: 32px;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  color: #4a4a4a;
  &:hover,
  &:visited {
    color: #4a4a4a;
  }
`

const GlobalHeader = styled.header`
  margin-top: 30px;
  text-align: left;
  margin-bottom: 45px;
`

interface HeaderProps {
  siteTitle: string
}

const Header: FC<HeaderProps> = ({ siteTitle = '' }) => (
  <GlobalHeader>
    <Logo to="/">{siteTitle}</Logo>
  </GlobalHeader>
)

export default Header
