import * as React from "react";
import styled from "styled-components";
import Flex from "src/components/Layout/Flex";
import Menu from "src/components/Menu";

import logo from "src/assets/images/logo.svg";
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

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <HeaderBar>
      <Flex justify="space-between" width="100%">
        <a href="/">
          <img src={logo} alt="Logo do Ramo IEEE UnB" />
        </a>
        <input
          value={showMenu}
          onChange={(e) => setShowMenu(!showMenu)}
          type="checkbox"
          name=""
          id=""
        />
        {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
      </Flex>
      <Menu showMenu={showMenu}></Menu>
    </HeaderBar>
  );
};

export default Header;
