import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../components/Theme";

const Text = styled.h1`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.1)`};
  font-size: calc(5rem + 5vw);
  z-index: 0;

  ${mediaQueries(70)`
    top: 35rem;
     left: 9rem;
  `};

  ${mediaQueries(60)`
    top: 35rem;
     left: 7rem;
  `};

  ${mediaQueries(40)`
     top: 4rem;
     left: 3.5rem;
  `};
`;

const BigTitle = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  );
};

export default BigTitle;
