import React from "react";
import { mediaQueries } from "./Theme";
import styled from "styled-components";
import { motion } from "framer-motion";
import Stage from "../subComponents/Bubble/Window";

const Box = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  width: 40vw;
  height: 50vh;
  z-index: 3;
  line-height: 1.5;
  cursor: crosshair;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: fixed;
  left: calc(50rem + 2vw);
  top: 10rem;

  font-family: "Ubunto Mono", monospace;

  ${mediaQueries(160)`
    width: 38vw;
    top:50%;
    height: 60vh;
    transform:translate(-50%,-50%);
    left:73%;
  `};

  ${mediaQueries(90)`
    width: 30vw;
    top:50%; 
    transform:translate(-50%,-50%);
    left:75%;
  `};

  ${mediaQueries(75)`
    width: 30vw;
    top:50%; 
    transform:translate(-50%,-50%);
    left:75%;
  `};

  ${mediaQueries(60)`
    width: 30vw;
    top:50%; 
    transform:translate(-50%,-50%);
    left:75%;
  `};

  ${mediaQueries(40)`
    width: 60vw;
    top:50%;
    transform:translate(-50%,-50%);
    left:50%;
  `};

  ${mediaQueries(30)`
    display: none;
  `};
`;

const Bubble = () => {
  return (
    <Box
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
    >
      <Stage />
    </Box>
  );
};

export default Bubble;
