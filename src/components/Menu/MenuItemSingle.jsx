import * as React from "react";
import styled from "styled-components";

const MenuListItem = styled.li`
  list-style-type: none;
`;

const ItemButton = styled.button`
  border-radius: 18px;
  padding: 1em;
  border: none;
  background-color: white;
  box-shadow: 0px 3px 5px rgb(0 0 0 / 20%);
  color: #707070;
  font-size: 0.9em;
  font-weight: 500;
  cursor: pointer;
  width: 7em;
  position: relative;

  @media (max-width: 1050px) {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
    border-bottom: 1px solid #0000001a;
    background-color: ${(props) => (props.subpage ? "#eeeeee" : "white")};
  }
`;

const MenuItemSingle = (props) => {
  return (
    <MenuListItem>
      <ItemButton subpage={props?.subpage}>{props.page}</ItemButton>
    </MenuListItem>
  );
};

export default MenuItemSingle;
