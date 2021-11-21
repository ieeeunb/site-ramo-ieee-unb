import React from "react";
import styled from "styled-components";

import MenuItemSingle from "./MenuItemSingle";
import MenuItemDropdown from "./MenuItemDropdown";

const StyledMenu = styled.ul`
  display: flex;
  gap: 1em;
`;

const Menu = (props) => {
  return (
    <nav>
      <StyledMenu>
        <MenuItemDropdown page="Sobre nós">
          <MenuItemSingle page="IEEE"></MenuItemSingle>
          <MenuItemSingle page="Ramo"></MenuItemSingle>
          <MenuItemSingle page="Capítulos"></MenuItemSingle>
          <MenuItemSingle page="Grupos de Afinidade"></MenuItemSingle>
          <MenuItemSingle page="Prêmios e conquistas"></MenuItemSingle>
        </MenuItemDropdown>
        <MenuItemDropdown page="Atividades">
          <MenuItemSingle page="Eventos"></MenuItemSingle>
          <MenuItemSingle page="Projetos"></MenuItemSingle>
          <MenuItemSingle page="Processos Seletivos"></MenuItemSingle>
        </MenuItemDropdown>
        <MenuItemSingle page="Notícias"></MenuItemSingle>
        <MenuItemSingle page="Galeria"></MenuItemSingle>
      </StyledMenu>
    </nav>
  );
};

export default Menu;
