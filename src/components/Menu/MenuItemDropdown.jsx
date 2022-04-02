import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

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
`;

const SubItemList = styled.ul`
  padding: 0;
  position: absolute;
  display: none;
  ${(props) =>
    props.showing &&
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

  li {
    margin: 0.5em 0;
  }
`;

const MenuItemSingle = (props) => {
  const [showing, setShowing] = useState(false);
  let ref = useRef(null);

  const handleClick = () => {
    setShowing(!showing);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      showing && setShowing(!showing);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <MenuListItem>
      <ItemButton ref={ref} onClick={handleClick}>
        {props.page}
      </ItemButton>
      <SubItemList showing={showing}>{props.children}</SubItemList>
    </MenuListItem>
  );
};

export default MenuItemSingle;
