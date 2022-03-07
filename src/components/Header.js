import React from "react";
import logo from "../images/logo_size.jpg";
import {Logo, Title, ContentWrapper} from '../layout/Layout'

function Header() {
  return (
    <ContentWrapper centered>
      <Logo src={logo}></Logo>
      <Title>My Todo App for TOP</Title>
    </ContentWrapper>
  );
}


export default Header;
