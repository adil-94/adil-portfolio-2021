import React from "react";
import { SectionLink } from "react-scroll-section";
import styled from "styled-components";

const Menu = styled.ul`
  position: fixed;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin: 0;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #a2d5f2;
  font-weight: 400
`;

const Item = styled.li`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s;
  margin: 0;
  padding: 10px 10px;

  
  user-select: none;
  color: ${props => (props.selected ? "#ffc000" : "inherit")};
`;

const MenuItem = ({ section, children }) => (
  <SectionLink section={section}>
    {link => (
      <Item onClick={link.onClick} selected={link.isSelected}>
        {children}
      </Item>
    )}
  </SectionLink>
);

export { MenuItem as Item, Menu };

export default styled;
