import React from "react";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mediaQueries } from "../components/Theme";
import { ThemeBtn } from "../components/AllSvgs";

const Theme = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0%);

  background-color: #fcf6f4;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  &:hover {
    background-color: #ffd600;
    box-shadow: 0 0 8px 6px rgba(255, 255, 0, 0.2);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }

  ${mediaQueries(40)`
   width: 2rem;
  height: 2rem;
      svg{
        width:30px;
        height:30px;
      }
  `};
`;

function ThemeButton() {
  return (
    <Theme>
      <ThemeBtn width={30} height={30} fill="currentColor" />
    </Theme>
  );
}

export default ThemeButton;
