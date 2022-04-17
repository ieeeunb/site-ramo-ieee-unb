import * as React from "react";
import styled from "styled-components";

const MenuListItem = styled.li`
  list-style-type: none;
`;

const ItemButton = styled.button`
  border-radius: 20%/50%;
  padding: 1em;
  border: none;
  background-color: white;
  box-shadow: 5px 5px 20px 1px #afafaf;
  color: #707070;
  font-size: 0.9em;
  font-weight: 500;
  cursor: pointer;
  width: 7em;
  position: relative;

  @media (max-width: 1050px) {
    width: 100%;
    border-radius: 20px;
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
