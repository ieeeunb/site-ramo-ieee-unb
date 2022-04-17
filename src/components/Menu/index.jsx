import React from "react";
import styled, { css } from "styled-components";

import MenuItemSingle from "src/components/Menu/MenuItemSingle";
import MenuItemDropdown from "src/components/Menu/MenuItemDropdown";

const StyledNav = styled.nav`
  @media (max-width: 1050px) {
    width: 100%;
    position: absolute;
    top: 5rem;

    display: none;
    ${(props) =>
      props.showMenu &&
      css`
        display: block;
      `};
    animation: growDown 500ms ease-in-out forwards;
    transform-origin: top center;

    @keyframes growDown {
      0% {
        transform: scaleY(0);
      }
      80% {
        transform: scaleY(1.1);
      }
      100% {
        transform: scaleY(1);
      }
    }
  }
`;

const StyledMenu = styled.ul`
  display: flex;
  gap: 1em;
  position: relative;
  z-index: 3;

  @media (max-width: 1050px) {
    flex-direction: column;
    justify-content: center;
    gap: 0;
    padding-left: 0;
  }
`;

const Menu = (props) => {
  return (
    <StyledNav showMenu={props.showMenu}>
      <StyledMenu>
        <MenuItemSingle page="Início"></MenuItemSingle>
        <MenuItemDropdown page="Sobre nós">
          <MenuItemSingle subpage page="IEEE"></MenuItemSingle>
          <MenuItemSingle subpage page="Ramo"></MenuItemSingle>
          <MenuItemSingle subpage page="Capítulos"></MenuItemSingle>
          <MenuItemSingle subpage page="Grupos de Afinidade"></MenuItemSingle>
          <MenuItemSingle subpage page="Prêmios e conquistas"></MenuItemSingle>
        </MenuItemDropdown>
        <MenuItemDropdown subpage page="Atividades">
          <MenuItemSingle subpage page="Eventos"></MenuItemSingle>
          <MenuItemSingle subpage page="Projetos"></MenuItemSingle>
          <MenuItemSingle subpage page="Processos Seletivos"></MenuItemSingle>
        </MenuItemDropdown>
        <MenuItemSingle page="Notícias"></MenuItemSingle>
        <MenuItemSingle page="Galeria"></MenuItemSingle>
      </StyledMenu>
    </StyledNav>
  );
};

export default Menu;
