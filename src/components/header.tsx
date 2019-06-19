import React, { FC } from "react"
import styled from '@emotion/styled'
import { Link } from "gatsby"

interface HeaderProps {
  siteTitle: string,
}

const Logo = styled(Link)`
  color: #1a8ef1;
  font-weight: bold;
  font-size: 60px;
  text-decoration: none;
`;

const GrobalHeader = styled.header`
  text-align: center;
`;

const Header: FC<HeaderProps> = ({ siteTitle = '' }) => (
  <GrobalHeader>
    <Logo to="/">
      {siteTitle}
    </Logo>
  </GrobalHeader>
)


export default Header
