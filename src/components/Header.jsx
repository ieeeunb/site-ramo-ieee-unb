import * as React from "react";
import styled from "styled-components";
import Flex from "src/components/Layout/Flex";
import Menu from "src/components/Menu";

import logo from "src/assets/images/logo.svg";
import hamburguer from "src/assets/hamburguer-menu.svg";
import { useState } from "react";

const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1em 7em;
  align-items: center;

  @media (max-width: 1050px) {
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1em 3em;
    justify-content: center;
  }

  @media (max-width: 700px) {
    padding: 1em 1em;
  }
`;

const Logo = styled.img`
  @media (max-width: 550px) {
    width: 220px;
  }
`;

const MenuButton = styled.img`
  @media (min-width: 1050px) {
    display: none;
  }

  position: absolute;
  width: 30px;
  height: 30px;
  right: 40px;

  @media (max-width: 450px) {
    right: 20px;
  }
`;

const MenuToggle = styled.input`
  position: absolute;
  width: 30px;
  height: 30px;
  right: 40px;
  opacity: 0;
  cursor: pointer;

  @media (max-width: 450px) {
    right: 20px;
  }
`;

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <HeaderBar>
      <Flex justify="space-between" width="100%">
        <a href="/">
          <Logo src={logo} alt="Logo do Ramo IEEE UnB" />
        </a>

        <MenuButton src={hamburguer} alt="" />
        <MenuToggle
          value={showMenu}
          onChange={(e) => setShowMenu(!showMenu)}
          type="checkbox"
          name=""
          id=""
        />
      </Flex>
      <Menu showMenu={showMenu}></Menu>
    </HeaderBar>
  );
};

export default Header;
