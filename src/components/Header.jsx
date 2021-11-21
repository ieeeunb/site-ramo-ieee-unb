import * as React from "react";
import styled from "styled-components";

import Menu from "./Menu";

import logo from "../images/logo.svg";

const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1em 7em;
  align-items: center;
`;

const Header = (props) => {
  return (
    <HeaderBar>
      <a href="/">
        <img src={logo} alt="Logo do Ramo IEEE UnB" />
      </a>
      <Menu></Menu>
    </HeaderBar>
  );
};

export default Header;
